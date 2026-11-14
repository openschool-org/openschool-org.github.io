// GENERATED FILE - do not edit directly.
// Source of truth: the GitHub Releases API for openschool-org/openschool, cached at src/data/changelog-cache.json.
// Regenerate with `npm run generate:content`.

export type ChangelogBlock =
  | {type: 'paragraph'; text: string}
  | {type: 'list'; items: string[]};

export type ChangelogSection = {
  heading: string;
  blocks: ChangelogBlock[];
};

export type ChangelogRelease = {
  slug: string;
  version: string;
  name: string;
  date: string;
  tag: string;
  prerelease: boolean;
  githubUrl: string;
  summary: string;
  contributors: string[];
  sections: ChangelogSection[];
};

const changelog: ChangelogRelease[] = [
  {
    "slug": "v0.3.0",
    "version": "v0.3.0",
    "name": "OpenSchool v0.3.0",
    "date": "2026-09-30",
    "tag": "v0.3.0",
    "prerelease": false,
    "githubUrl": "https://github.com/openschool-org/openschool/releases/tag/v0.3.0",
    "summary": "OpenSchool v0.3.0 lets students and guardians activate their own accounts, adds guided year-end workflows, and strengthens security, privacy, and performance across the platform. This release also rebuilds the frontend around a feature-first architecture, improves usability and accessibility throughout, and adds Sinhala and Tamil language support to the student and parent portals.",
    "contributors": [
      "HasithaErandika",
      "Krishmal2004",
      "chamals3n4"
    ],
    "sections": [
      {
        "heading": "What's Included",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This release includes the following improvements and new functionality:"
          },
          {
            "type": "list",
            "items": [
              "Self-service account activation for students and guardians using school-issued activation codes, with printable code slips, CSV export, reprinting, revoking, activation windows, and code expiry",
              "Transactional email with branded templates and a choice of Resend, SMTP, or a console sender for development, plus a Settings → Email page with previews and test sends",
              "A reworked password reset flow that updates credentials through the identity provider",
              "Names with initials and calling names for students, teachers, and guardians, used consistently in lists, registers, printouts, and emails",
              "Guided year-end workflows with editable proposals and a revert option: year rollover, leavers, subject choices, student intake from CSV, promotion and class formation, teacher allocation, timetable generation, and go live",
              "Promotion rules per grade, class capacity, A/L stream placement, and a waiting list for newly admitted students",
              "Timetable option blocks for subject choice groups, with a repair pass that closes gaps in teachers' schedules",
              "A school resource map for homerooms, labs, libraries, halls, and other facilities, with automatic homeroom creation",
              "Preset curriculum loading for subjects",
              "Teacher and non-academic staff attendance tabs with search, pagination, and a safe \"mark all as present\" action",
              "Server-side search and pagination for students, teachers, guardians, notifications, and the audit log",
              "Late attendance counts in session lists, and removed attendance marks are now saved",
              "A redesigned teacher overview with today's attendance progress, and a guardian overview with per-child attendance and recent notices",
              "Grade and class avatars coloured by school section (Primary, Junior, O/L, A/L), used across dashboards, class pages, and the resources page",
              "Sinhala and Tamil translations for the student and parent portals, with the chosen language saved per user"
            ]
          }
        ]
      },
      {
        "heading": "Frontend Architecture",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The frontend has been reorganised into a feature-first structure."
          },
          {
            "type": "paragraph",
            "text": "Each feature now owns its:"
          },
          {
            "type": "list",
            "items": [
              "API calls",
              "Queries and query keys",
              "Components",
              "Pages"
            ]
          },
          {
            "type": "paragraph",
            "text": "Shared building blocks now live in one place, including DataGrid, FilterBar, ListState, PortalShell, and a set of utility styles. ESLint enforces the layer"
          },
          {
            "type": "paragraph",
            "text": "rules, so features cannot import another feature's pages or API code, and files stay under 250 lines."
          },
          {
            "type": "paragraph",
            "text": "The navigation has been simplified into five hubs, and each portal now loads its own routes lazily."
          }
        ]
      },
      {
        "heading": "Security and Privacy",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This release adds substantial security and privacy protections:"
          },
          {
            "type": "list",
            "items": [
              "Teachers can now only access classes and students they teach or lead, based on their role: class teacher, subject teacher, section head, vice principal, or principal",
              "NIC numbers, which are used as initial passwords, are no longer visible to teachers, students, or parents",
              "Database error details are no longer returned to the browser; failures are logged with a request ID instead",
              "JWT audience checks, so tokens issued for other applications are rejected",
              "Per-account rate limiting on password reset and activation, alongside per-IP limits",
              "Structured request logging that no longer records search terms, names, or index numbers",
              "Request IDs, request timeouts, and security headers on every response",
              "Access logging for student profile reads",
              "Data retention and erasure support, with automatic retry of identity cleanup that did not finish",
              "Enrolment changes are now recorded in the audit log"
            ]
          }
        ]
      },
      {
        "heading": "Performance and Reliability",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Trigram search indexes for names, index numbers, employee numbers, phone numbers, and NIC numbers",
              "Indexes on foreign keys that were missing them, and removal of duplicate indexes",
              "The database now allows only one current academic year and one current term",
              "Gzip compression and caching for rarely changing reference data",
              "A health check endpoint and Prometheus metrics for deployments",
              "Fewer requests from the teacher dashboard, which no longer loads whole class rosters to count students",
              "Notification polling reduced to one unread-count request every two minutes, only while the tab is visible"
            ]
          }
        ]
      },
      {
        "heading": "Usability and Accessibility",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Page titles, breadcrumbs, a skip link, and a mobile drawer and bottom tab bar",
              "Filters kept in the URL, sortable table headers, and stacked cards on phones",
              "A calendar-only, day-first date picker across all forms",
              "Unsaved-changes warnings on edit screens and restored drafts when marking attendance",
              "Improved keyboard navigation when entering marks",
              "A minimum text size of 12px, better focus states, and accessible progress bars",
              "An offline banner, and a saved copy of the timetable for students and parents",
              "Consistent, plain-English copy in sentence case"
            ]
          }
        ]
      },
      {
        "heading": "Background Automation",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Background jobs are now declared by the backend and shown on the Automation page with their checks and last runs:"
          },
          {
            "type": "list",
            "items": [
              "Academic delivery",
              "Data retention",
              "Identity erasure retry",
              "People compliance",
              "Security audit",
              "Structural integrity",
              "System health"
            ]
          },
          {
            "type": "paragraph",
            "text": "Year-end workflows also appear on the Automation page, with their steps and last run."
          }
        ]
      },
      {
        "heading": "Bug Fixes",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Fixed activation emails failing silently when the wrong account type was chosen",
              "Fixed the Assign class teacher picker losing the selected teacher",
              "Fixed guardian NIC numbers not showing on the Admin Guardians page",
              "Fixed enrolling a student already in another class reporting success while doing nothing",
              "Fixed creating a current academic year leaving two current years",
              "Fixed the teacher dashboard always showing a pending attendance session",
              "Fixed notes from an earlier attendance status being saved on present records",
              "Fixed dates showing in US format",
              "Fixed staff attendance totals missing some staff",
              "Resolved findings from SonarQube and CodeRabbit reviews"
            ]
          }
        ]
      },
      {
        "heading": "Upgrade Notes",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Run the new database migrations 000041 to 000054. They apply automatically when the backend starts.",
              "Migration 000054 requires exactly one current academic year and one current term. Check your data before upgrading.",
              "Set the new mail settings in backend/.env: MAIL_PROVIDER, RESEND_API_KEY or SMTP_*, MAIL_FROM, and FRONTEND_URL. Production will not start with the console mail provider.",
              "Set ACTIVATION_CODE_KEY to allow unused activation codes to be reprinted.",
              "MAIL_REDIRECT_TO is for testing only and must be empty in production.",
              "Guardian self-activation needs a parent user type and role in ThunderID."
            ]
          }
        ]
      },
      {
        "heading": "Documentation",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Added ADR 0008 for self-service account activation",
              "Added ADR 0009 for transactional email",
              "Updated ADR 0003, since the single current academic year is now enforced by the database",
              "Updated docs/FEATURES.md, docs/ARCHITECTURE.md, and docs/THUNDERID.md",
              "Added a security and performance playbook and an updated PR template"
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "v0.2.0",
    "version": "v0.2.0",
    "name": "OpenSchool v0.2.0",
    "date": "2026-09-15",
    "tag": "v0.2.0",
    "prerelease": false,
    "githubUrl": "https://github.com/openschool-org/openschool/releases/tag/v0.2.0",
    "summary": "OpenSchool v0.2.0 delivers a major backend architecture refactor and improves the project’s reliability, developer experience, and documentation. The backend is now organised as a modular monolith, with each feature owning its routes, business logic, database access, and API contracts. This release also adds broader integration testing, stronger CI checks, and fixes API compatibility issues found in the frontend.",
    "contributors": [
      "chamals3n4",
      "HasithaErandika"
    ],
    "sections": [
      {
        "heading": "What's Included",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This release includes the following improvements and new functionality:"
          },
          {
            "type": "list",
            "items": [
              "NIC-based default passwords for teacher/guardian accounts and index-number defaults for students, plus a universal self-service password reset and forced first-login password change",
              "Class medium (language of instruction) support, wired into the setup wizard and promotion's auto-distribution logic",
              "Analytics dashboard covering student, staff, academic, and school-wide aggregates",
              "PDF report export for attendance and marks",
              "Staff management, including non-academic staff records and staff attendance",
              "Expanded student profile portfolio including progress reports, activities, leadership roles, awards, and disciplinary records",
              "In-app position/leadership hierarchy including Principal, Vice Principal, Section Head, Class Teacher, and Subject Teacher, layered on top of the base ThunderID roles",
              "Position-scoped notification permissions and a role-differentiated teacher dashboard",
              "Academic year promotion and class reassignment, including marks-based and random auto-distribution assist tools",
              "Full timetable module covering settings, grade sections, classrooms, subject period requirements, teacher availability, and a draft → validate → submit → review → approve/publish workflow",
              "In-app notification system with role/position-scoped recipient targeting and a per-user notification center",
              "Guardian directory with search, shared-guardian linking, and orphan filtering",
              "House colors and a self-balancing (least-populated-house) assignment algorithm for students and staff",
              "Audit log for sensitive changes, including house reassignment and attendance-lock overrides",
              "Attendance session locking for 24 hours with admin override",
              "Guardian absence notifications",
              "First-run onboarding with one-time admin registration and a guided School Setup wizard covering school profile, houses, grades, classes, and mediums",
              "Switched identity provider integration to ThunderID, previously Asgardeo, behind a provider-neutral internal/identity.Provider seam"
            ]
          }
        ]
      },
      {
        "heading": "Backend Architecture",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The backend modular-monolith refactor has been completed."
          },
          {
            "type": "paragraph",
            "text": "Each feature now owns its:"
          },
          {
            "type": "list",
            "items": [
              "HTTP routes",
              "Business logic",
              "Database adapter",
              "API contracts"
            ]
          },
          {
            "type": "paragraph",
            "text": "The old shared handler, service, repository, model, and route layers were removed."
          },
          {
            "type": "paragraph",
            "text": "This release also introduces API-wide per-IP rate limiting, which was previously limited to the first-run admin registration endpoint only."
          },
          {
            "type": "paragraph",
            "text": "Database connection pool sizing has also been tuned for expected load."
          }
        ]
      },
      {
        "heading": "Reliability and Security",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This release fixes several important issues and adds stronger protections:"
          },
          {
            "type": "list",
            "items": [
              "Fixed broken access control on attendance and term-marks endpoints",
              "Batched two N+1 query patterns in list endpoints",
              "Swagger UI is no longer served outside development builds",
              "Restored the snake_case JSON API fields used by class and curriculum screens",
              "Added audit logging for sensitive changes",
              "Added attendance session locking with admin override",
              "Added API-wide per-IP rate limiting"
            ]
          }
        ]
      },
      {
        "heading": "Documentation",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This release significantly expands and updates the project's documentation:"
          },
          {
            "type": "list",
            "items": [
              "Added docs/FEATURES.md, the current as-built feature reference",
              "Added docs/ARCHITECTURE.md",
              "Added docs/adr/ (Architecture Decision Records) for significant, easy-to-relitigate design decisions",
              "Added audit.md, a standing code-quality and security audit with tracked severity/status",
              "Added SECURITY.md",
              "Added CODE_OF_CONDUCT.md",
              "Added this changelog",
              "Corrected stale claims in docs/SETUP.md, including the teacher dashboard mock-data note and the \"starting over\" TRUNCATE TABLE table list, which was missing ~20 tables added by later migrations",
              "Added backend and frontend README files",
              "Refreshed the root README and contributor guide",
              "Simplified environment example files"
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "v0.1.0",
    "version": "v0.1.0",
    "name": "OpenSchool v0.1.0",
    "date": "2026-08-11",
    "tag": "v0.1.0",
    "prerelease": false,
    "githubUrl": "https://github.com/openschool-org/openschool/releases/tag/v0.1.0",
    "summary": "OpenSchool v0.1.0 is the first public release of OpenSchool, an open source, self-hosted school management system built specifically for Sri Lankan schools. OpenSchool provides a modern alternative to paper-based processes and expensive proprietary school management software, while allowing schools to retain full control of their data and infrastructure.",
    "contributors": [
      "HasithaErandika",
      "chamals3n4"
    ],
    "sections": [
      {
        "heading": "What's Included",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This release includes the core functionality required for day-to-day school operations:"
          },
          {
            "type": "list",
            "items": [
              "Student, teacher, and guardian record management",
              "Class, subject, and curriculum management",
              "Attendance tracking with present, absent, late, and excused statuses",
              "Attendance editing controls with audit logging",
              "School house management with automatic balancing",
              "Role-based access for Principals, Vice Principals, Section Heads, Class Teachers, and Subject Teachers",
              "Academic year promotion with an administrative preview before changes are committed",
              "Teaching and non-teaching staff management",
              "Staff attendance and leave tracking",
              "Student profiles including progress reports, activities, leadership roles, awards, and disciplinary records",
              "Prefect board management with year-by-year history",
              "Analytics dashboard for attendance, student and staff statistics, and academic performance",
              "PDF reports for attendance and marks",
              "Authentication through ThunderID",
              "Login using NIC numbers or student index numbers as default credentials"
            ]
          }
        ]
      },
      {
        "heading": "Built for Sri Lankan Schools",
        "blocks": [
          {
            "type": "paragraph",
            "text": "OpenSchool is designed around the structures and workflows commonly found in Sri Lankan schools, including:"
          },
          {
            "type": "list",
            "items": [
              "Houses",
              "Grades and classes",
              "Sinhala, Tamil, and English mediums",
              "Academic streams",
              "Terms",
              "School leadership and teaching roles"
            ]
          },
          {
            "type": "paragraph",
            "text": "These concepts are part of the platform's core design rather than workarounds added to a generic school management system."
          }
        ]
      },
      {
        "heading": "Technology",
        "blocks": [
          {
            "type": "paragraph",
            "text": "OpenSchool is built as a monorepo using:"
          },
          {
            "type": "list",
            "items": [
              "Backend: Go REST API",
              "Frontend: React with Carbon Design System",
              "Authentication: ThunderID"
            ]
          }
        ]
      },
      {
        "heading": "Out of Scope",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The following features are not part of this release:"
          },
          {
            "type": "list",
            "items": [
              "Full learning management and online classroom functionality",
              "School fee and finance management",
              "Public-facing mobile applications"
            ]
          },
          {
            "type": "paragraph",
            "text": "These may be considered for future development."
          }
        ]
      }
    ]
  }
];

export default changelog;
