#!/usr/bin/env bash
# Builds every published version of the guide into one directory tree, ready to be
# uploaded as the single GitHub Pages artifact:
#
#   <out>/                  main          (current published version)
#   <out>/develop/          develop       (DRAFT preview of the next version)
#   <out>/<tag>/            one per git tag (archived versions)
#
# Every tag is published -- tagging a commit is how a version is declared released.
# Each ref is built from its own checkout with its own dependencies, so old versions keep
# building the way they did when they were released.
#
# Usage: scripts/build-site.sh <out-dir>
# Optional env: MAIN_REF (default origin/main), DEVELOP_REF (default origin/develop)
set -euo pipefail

SITE_BASE="/metadata-and-payloads-guide"
MAIN_REF="${MAIN_REF:-origin/main}"
DEVELOP_REF="${DEVELOP_REF:-origin/develop}"

OUT="${1:?usage: build-site.sh <out-dir>}"
ROOT="$(git rev-parse --show-toplevel)"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"; git -C "$ROOT" worktree prune' EXIT

mkdir -p "$OUT"
OUT="$(cd "$OUT" && pwd)"

# The History page lists every version, so generate it once and put the same copy in every
# build -- each rebuild of an archived version then also shows releases made after it.
MAIN_REF="$MAIN_REF" DEVELOP_REF="$DEVELOP_REF" node "$ROOT/scripts/generate-history.mjs" "$WORK/history.md"

# build_ref <name> <git-ref> <channel> <url-path> <dest-dir>
build_ref() {
  local name="$1" ref="$2" channel="$3" url_path="$4" dest="$5"
  local dir="$WORK/$name"

  echo "::group::Build $name ($ref) -> $url_path"
  git -C "$ROOT" worktree add --detach "$dir" "$ref" >/dev/null
  cp "$WORK/history.md" "$dir/docs/history.md"

  # Refs from before the History page existed have no sidebar entry for it. Wrap their
  # config (without touching the ref itself) so History is appended below the last group.
  if ! grep -q "history" "$dir/docs/.vitepress/config.mts"; then
    mv "$dir/docs/.vitepress/config.mts" "$dir/docs/.vitepress/config.base.mts"
    cat > "$dir/docs/.vitepress/config.mts" <<'EOF_SHIM'
import base from './config.base.mts'
const tc: any = base.themeConfig ?? {}
export default {
  ...base,
  themeConfig: { ...tc, sidebar: [...(tc.sidebar ?? []), { text: 'History', link: '/history' }] }
}
EOF_SHIM
  fi
  (
    cd "$dir"
    npm ci --no-audit --no-fund
    # The VitePress CLI has no --base flag, but the build API does. Overriding it here
    # means old refs (whose config.mts hard-codes the root base) build unchanged.
    DOCS_CHANNEL="$channel" node --input-type=module \
      -e "import { build } from 'vitepress'; await build('docs', { base: process.argv[1] }); process.exit(0)" \
      "$url_path"
  )

  mkdir -p "$dest"
  cp -R "$dir/docs/.vitepress/dist/." "$dest/"

  # Older refs hard-code absolute /metadata-and-payloads-guide/... hrefs in the home page
  # hero buttons, which would jump to the current version. Point them at this build.
  if [ "$url_path" != "$SITE_BASE/" ] && [ -f "$dest/index.html" ]; then
    sed -i.bak -E "s#(class=\"home-hero-btn[^>]*href=\")$SITE_BASE/#\1$url_path#g" "$dest/index.html"
    rm -f "$dest/index.html.bak"
  fi
  echo "::endgroup::"
}

build_ref main "$MAIN_REF" release "$SITE_BASE/" "$OUT"
build_ref develop "$DEVELOP_REF" draft "$SITE_BASE/develop/" "$OUT/develop"

while IFS= read -r tag; do
  [ -n "$tag" ] || continue
  if [ "$tag" = "develop" ]; then
    echo "Tag named 'develop' would collide with the draft preview; rename it." >&2
    exit 1
  fi
  build_ref "tag-$tag" "refs/tags/$tag" release "$SITE_BASE/$tag/" "$OUT/$tag"
done < <(git -C "$ROOT" tag --list)
