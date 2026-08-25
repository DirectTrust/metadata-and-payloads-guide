import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Metadata and Payloads Guide',
  description: 'Framework for Metadata and Payloads via the Direct Standard(R) - Part I: Framework Foundations',
  base: '/metadata-and-payloads-guide/',
  cleanUrls: true,

  themeConfig: {
    logo: '/directtrust-logo.png',
    siteTitle: false,

    nav: [
      { text: 'Introduction', link: '/overview' },
      { text: 'About This Document', link: '/document-info' },
      { text: 'Appendices', link: '/appendices' },
      { text: 'DirectTrust Technical Docs Home', link: 'https://directtrust.github.io' }
    ],

    sidebar: [
      { text: 'About This Document', link: '/document-info' },
      {
        text: 'Framework Foundations',
        link: '/overview',
        items: [
          { text: 'Metadata and Payload Overview', link: '/overview' },
          { text: 'About Direct Secure Messaging', link: '/direct-secure-messaging' }
        ]
      },
      {
        text: 'Use Case Framework',
        link: '/use-case-framework',
        collapsed: true,
        items: [
          {
            text: 'Actor and Transaction Framework',
            link: '/actor-transaction-framework',
            collapsed: true,
            items: [
              { text: 'Business Actors Framework', link: '/business-actors-framework' },
              { text: 'System Actors Framework', link: '/system-actors-framework' },
              { text: 'Technical Actor Framework', link: '/technical-actor-framework' },
              { text: 'Message Transaction Framework', link: '/message-transaction-framework' },
              { text: 'Technical Use Case Framework', link: '/technical-use-case-framework' },
              { text: 'Actor Transaction Diagrams', link: '/actor-transaction-diagrams' },
              { text: 'Transaction Summary', link: '/transaction-summary' }
            ]
          }
        ]
      },
      {
        text: 'Message Payload Framework',
        link: '/message-payload-framework',
        collapsed: true,
        items: [
          { text: 'Message Metadata', link: '/message-metadata' },
          { text: 'Payload Components', link: '/payload-components' },
          { text: 'SubmissionSet Metadata', link: '/submissionset-metadata' },
          { text: 'DocumentEntry Metadata', link: '/documententry-metadata' },
          { text: 'Functional Requirements', link: '/functional-requirements' }
        ]
      },
      { text: 'Patient Demographics for Matching', link: '/patient-matching' },
      { text: 'Endpoint Use Case Mapping', link: '/endpoint-use-case-mapping' },
      { text: 'Endpoint Capability Declaration', link: '/endpoint-capability-declaration' },
      {
        text: 'Appendices',
        link: '/appendices',
        collapsed: true,
        items: [
          { text: 'Specification References', link: '/specification-references' },
          { text: 'Value Sets Index', link: '/value-sets-index' },
          { text: 'FHIR over Direct Guidance', link: '/fhir-over-direct' },
          { text: 'Three (or more) System Actor Formations', link: '/three-system-actor-formations' },
          { text: 'XDM DocumentEntry.objectType Clarification', link: '/xdm-documententry-objecttype' },
          {
            text: 'Patient Demographics Coding and Representation',
            link: '/patient-demographics-coding',
            collapsed: true,
            items: [
              {
                text: 'Sample Patient Demographic Representations',
                link: '/sample-patient-demographic-representations',
                collapsed: true,
                items: [
                  { text: 'V2 PID Segment', link: '/v2-pid-segment' },
                  { text: 'CDA RecordTarget Structure', link: '/cda-recordtarget-structure' },
                  { text: 'FHIR Patient Resource', link: '/fhir-patient-resource' }
                ]
              },
              { text: 'Patient Identifiers', link: '/patient-identifiers' },
              { text: 'Patient Identifier List', link: '/patient-identifier-list' },
              { text: 'Patient Name', link: '/patient-name' },
              { text: 'Patient Date of Birth', link: '/patient-date-of-birth' },
              { text: 'Patient Administrative Gender (Sex)', link: '/patient-administrative-gender' },
              { text: 'Patient Address', link: '/patient-address' },
              { text: 'Patient Telecom', link: '/patient-telecom' },
              { text: 'Patient Race and Ethnicity', link: '/patient-race-ethnicity' },
              { text: 'Patient Preferred Language', link: '/patient-preferred-language' }
            ]
          }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    }
  }
})
