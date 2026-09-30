// GENERATED FILE - do not edit directly.
// Source of truth: src/data/features/*.md
// Regenerate with `npm run generate:content`.

export type FeatureIcon =
  | 'Building2'
  | 'KeyRound'
  | 'MailCheck'
  | 'IdCard'
  | 'LayoutDashboard'
  | 'History'
  | 'Calendar'
  | 'GraduationCap'
  | 'Waves'
  | 'Languages'
  | 'BookOpen'
  | 'UserRound'
  | 'UserCog'
  | 'UsersRound'
  | 'Briefcase'
  | 'House'
  | 'Trophy'
  | 'Flag'
  | 'CalendarCheck'
  | 'FileText'
  | 'Workflow'
  | 'Shuffle'
  | 'CalendarClock'
  | 'Bell'
  | 'BarChart3'
  | 'Bot';

export type FeatureGroup = 'foundation' | 'structure' | 'people' | 'operations';

export type Feature = {
  slug: string;
  title: string;
  icon: FeatureIcon;
  order: number;
  group: FeatureGroup;
  homeFeatured: boolean;
  summary: string;
  items: string[];
};

const features: Feature[] = [
  {
    "slug": "school-management",
    "title": "School Management",
    "icon": "Building2",
    "order": 1,
    "group": "foundation",
    "homeFeatured": true,
    "summary": "The school profile and the first-run Setup wizard that gets a fresh instance from empty to operational.",
    "items": [
      "Guided School Setup wizard: school details → houses → grades → classes → mediums",
      "Resumable and idempotent - blocks the rest of the app until the school record and grade range exist",
      "One authoritative school profile: name, address, phone, email, inline logo",
      "Editable grade range (1-13) the school runs",
      "School type (boys / girls / mixed), enforced against student gender at create/update time"
    ]
  },
  {
    "slug": "identity-security",
    "title": "Identity & Password Lifecycle",
    "icon": "KeyRound",
    "order": 2,
    "group": "foundation",
    "homeFeatured": false,
    "summary": "Account provisioning and password lifecycle, backed by ThunderID.",
    "items": [
      "Teacher, student, and parent accounts created from inside OpenSchool, provisioning the matching ThunderID account automatically",
      "ThunderID self-registration stays off for every role",
      "NIC-based default passwords for teachers/guardians, index-number defaults for students",
      "Forced first-login password change via a full-page interstitial",
      "Self-service \"Forgot password?\" with a 15-minute, single-use, hash-stored reset link",
      "Change password any time from the header menu, with a \"password changed\" email after every change",
      "Best-effort compensating rollback when ThunderID and the local database fall out of step"
    ]
  },
  {
    "slug": "account-activation",
    "title": "Account Activation & Email",
    "icon": "MailCheck",
    "order": 3,
    "group": "foundation",
    "homeFeatured": false,
    "summary": "Self-service account activation for students and parents with one-time codes, plus branded transactional email.",
    "items": [
      "One-time activation codes issued in bulk from Settings > Account activation, per class or for everyone without a login",
      "Students and parents activate at /activate with a code, their index or NIC number, and a confirmed email",
      "Off by default, with a switch per role and an optional date window",
      "Class-wise printable sheets: a hand-out list for the class teacher plus cut-out slips, 10 per A4 page",
      "Reopen a batch's unused codes as class PDFs or CSV, with every reopening audit-logged",
      "Branded HTML and plain-text emails sent through Resend or any SMTP server",
      "Settings > Email shows the active provider, previews each email, and sends a test"
    ]
  },
  {
    "slug": "roles-positions",
    "title": "Roles & Positions",
    "icon": "IdCard",
    "order": 4,
    "group": "foundation",
    "homeFeatured": false,
    "summary": "An in-app leadership hierarchy layered on top of the four ThunderID roles.",
    "items": [
      "Four base roles from ThunderID: admin, teacher, student, parent",
      "In-app position hierarchy: Principal → Vice Principal → Section Head → Class Teacher → Subject Teacher → Teacher",
      "Principal/Vice Principal are permanent; Vice Principals are scoped to specific grades or the whole school",
      "Section Head, Class Teacher, and Subject Teacher are year-scoped",
      "Position determines notification reach, dashboard framing, and which classes a teacher can reach",
      "Subject teachers can only be assigned subjects they hold as a qualification",
      "NIC numbers are visible to admins only"
    ]
  },
  {
    "slug": "portals",
    "title": "Role-based Portals",
    "icon": "LayoutDashboard",
    "order": 5,
    "group": "foundation",
    "homeFeatured": false,
    "summary": "One sign-in page, with each user landing in the portal their role grants.",
    "items": [
      "Admin: the full dashboard across every module",
      "Teacher: today's attendance, stat tiles, recent sessions, quick actions, rank badge, My Timetable, and Review Timetables for Section Head and above",
      "Student: own profile, attendance history, term marks, published timetable, and Notification Center",
      "Parent: an overview across children, per-child attendance, marks, and timetable, plus recent notices",
      "Parents and students only ever see their own (or their child's) data, enforced server-side"
    ]
  },
  {
    "slug": "audit-log",
    "title": "Audit Log",
    "icon": "History",
    "order": 6,
    "group": "foundation",
    "homeFeatured": false,
    "summary": "An append-only record of sensitive changes, with actor and before/after state.",
    "items": [
      "House reassignments, attendance-lock overrides, and other sensitive actions logged",
      "Actor, before/after state, and an optional reason recorded per entry",
      "Admin-only, readable from Settings → Audit Log"
    ]
  },
  {
    "slug": "academic-year-management",
    "title": "Academic Year Management",
    "icon": "Calendar",
    "order": 7,
    "group": "structure",
    "homeFeatured": false,
    "summary": "Create academic years and flip exactly one to current - the scope almost every other module reads.",
    "items": [
      "Create and list academic years",
      "Set the single current academic year - the implicit scope for almost every module",
      "The database allows only one current year and one current term",
      "Creating a year as current switches the old one off",
      "A not-yet-current year stays fully editable until an admin flips it current"
    ]
  },
  {
    "slug": "grade-class-management",
    "title": "Grades & Classes",
    "icon": "GraduationCap",
    "order": 8,
    "group": "structure",
    "homeFeatured": false,
    "summary": "The full Grade 1-13 flow, with lettered class sections per grade.",
    "items": [
      "Model the full flow from Grade 1 to Grade 13, not just A/Level",
      "Lettered class sections per grade (10-A, 10-B, …)",
      "Each class points at a fixed home classroom, auto-created from the class name if missing",
      "Section-coloured avatars: Primary teal, Junior blue, O/L purple, A/L magenta",
      "Form and subject teacher assignment per class",
      "Full enrollment control: enroll and remove students"
    ]
  },
  {
    "slug": "stream-management",
    "title": "Streams & Stream Groups",
    "icon": "Waves",
    "order": 9,
    "group": "structure",
    "homeFeatured": false,
    "summary": "A/L streams and stream groups for Grade 12/13.",
    "items": [
      "Model streams like Physical Science, Bio Science, Commerce, Arts, Technology",
      "Editable short codes and section counts (12-M1, 13-C1, …)",
      "Stream groups for finer subject grouping (e.g. Physical vs. Bio Science)",
      "Section Head / teacher-in-charge assignment per grade or grade+stream"
    ]
  },
  {
    "slug": "medium-management",
    "title": "Mediums",
    "icon": "Languages",
    "order": 10,
    "group": "structure",
    "homeFeatured": false,
    "summary": "Sinhala, Tamil, English, or custom languages of instruction.",
    "items": [
      "Add Sinhala/Tamil/English or fully custom mediums",
      "Optionally pin a class to a medium",
      "Medium-pinned classes are excluded from promotion's auto-fill pools",
      "Medium-pinned students carry straight over to the same-medium class next grade"
    ]
  },
  {
    "slug": "subject-curriculum",
    "title": "Subjects & Curriculum",
    "icon": "BookOpen",
    "order": 11,
    "group": "structure",
    "homeFeatured": false,
    "summary": "The subject catalogue, curriculum levels, and elective selection groups.",
    "items": [
      "Subject catalogue: name and code",
      "Per-grade curriculum levels and selection groups",
      "Subject buckets for elective choices (e.g. \"choose 3 of these 6\"), enforced at enrollment",
      "Per-student subject enrollment, scoping marks, timetable periods, and notifications"
    ]
  },
  {
    "slug": "student-management",
    "title": "Student Management",
    "icon": "UserRound",
    "order": 12,
    "group": "people",
    "homeFeatured": false,
    "summary": "Student profiles, bulk import, and an 8-tab detail view covering their full school record.",
    "items": [
      "Profile, enrollment status, house, and up to 2 guardians per student",
      "Sri Lankan names: full name, name with initials, and an optional calling name - never split into first and last",
      "8-tab detail view: Profile, Guardians, Subject Enrollment, Progress Reports, Activities, Leadership & Awards, Disciplinary, Records",
      "Bulk CSV import straight into current classes, with a full preview, capacity flags, and undo",
      "Guardians matched by NIC during import, with conflicting names or emails blocked",
      "Phone numbers accepted in any common format and stored as 0XXXXXXXXX"
    ]
  },
  {
    "slug": "teacher-management",
    "title": "Teacher Management",
    "icon": "UserCog",
    "order": 13,
    "group": "people",
    "homeFeatured": false,
    "summary": "Teacher profiles, qualifications, employment status, and position assignment.",
    "items": [
      "Profile: title, gender, NIC, auto-assigned employee number",
      "Employment status: active, resigned, transferred",
      "Subject qualifications declared once on the Teacher Subjects page",
      "House and in-app position assignment",
      "Form and subject teacher assignment across classes, limited to qualified teachers"
    ]
  },
  {
    "slug": "guardian-management",
    "title": "Guardian Management",
    "icon": "UsersRound",
    "order": 14,
    "group": "people",
    "homeFeatured": true,
    "summary": "A searchable guardian directory with notification history and portal-login status.",
    "items": [
      "Dedicated directory, searchable by name, phone, email, or NIC",
      "NIC number, notification history, and portal-login status per guardian",
      "Shared guardians across siblings, linked from each child's Guardians tab",
      "Portal login set up from a student's Guardians tab, or self-activated with a code",
      "Delete blocked while a guardian is still linked to a student"
    ]
  },
  {
    "slug": "non-academic-staff",
    "title": "Non-academic Staff",
    "icon": "Briefcase",
    "order": 15,
    "group": "people",
    "homeFeatured": false,
    "summary": "Lab assistants, librarians, office staff, and other non-teaching roles.",
    "items": [
      "Lab Assistant, Librarian, Office Staff, Development Officer, IT Officer, Security, Minor Employee",
      "Profiles with no login/IDP account",
      "Shares the employee-number sequence with teachers"
    ]
  },
  {
    "slug": "house-management",
    "title": "Houses",
    "icon": "House",
    "order": 16,
    "group": "people",
    "homeFeatured": false,
    "summary": "Named houses that students and staff self-balance into automatically.",
    "items": [
      "Named houses with an editable color",
      "Least-populated-house-with-random-tiebreak auto-assignment",
      "Manual reassignment, audit-logged"
    ]
  },
  {
    "slug": "prefect-board",
    "title": "Prefect Board",
    "icon": "Trophy",
    "order": 17,
    "group": "people",
    "homeFeatured": false,
    "summary": "Rank-based prefect appointments per academic year, with a read-only archive of past years.",
    "items": [
      "Rank-based appointments: Head Prefect down to House Captain / Vice House Captain",
      "Scoped per academic year",
      "Year selector switches past years into a read-only archive"
    ]
  },
  {
    "slug": "societies",
    "title": "Societies",
    "icon": "Flag",
    "order": 18,
    "group": "people",
    "homeFeatured": false,
    "summary": "Clubs and societies with a teacher-in-charge and a five-role student roster, archived by year.",
    "items": [
      "Science Society, Interact/Leo Club, Scouts, and other clubs, each with an admin-assigned Teacher-in-Charge",
      "Five-role student roster: Leader, Deputy Leader, Secretary, Treasurer, Member",
      "Year-scoped, with the same read-only past-year archive view as the prefect board",
      "Teacher-in-Charge manages their own society's roster from a \"My Society\" page; admins can manage any society",
      "Memberships show up in the student's Activities tab"
    ]
  },
  {
    "slug": "attendance-management",
    "title": "Attendance Management",
    "icon": "CalendarCheck",
    "order": 19,
    "group": "operations",
    "homeFeatured": true,
    "summary": "Daily sessions for students and staff, with locking and guardian notifications.",
    "items": [
      "Per-class daily sessions: present/absent/late/excused, with an optional note",
      "Sessions lock 24 hours after creation; admin override is audit-logged",
      "Guardian notification on a newly-marked absence",
      "Staff attendance (present/late/absent/leave) for teachers and non-academic staff, with a monthly summary",
      "Teachers see their own record read-only from a \"My Attendance\" page"
    ]
  },
  {
    "slug": "academic-records",
    "title": "Academic Records",
    "icon": "FileText",
    "order": 20,
    "group": "operations",
    "homeFeatured": false,
    "summary": "Term marks and a full student portfolio - reports, activities, leadership, awards, discipline.",
    "items": [
      "School's term structure per academic year, with one current term",
      "Per-subject term marks with aggregate ranking",
      "Absent (\"AB\") marks that never count as a zero",
      "Teacher marks entry: class cards with live entered counts, for the current or any past term",
      "Progress reports, activities, leadership roles, awards, and disciplinary records per student"
    ]
  },
  {
    "slug": "year-end-workflows",
    "title": "Year-end Workflows",
    "icon": "Workflow",
    "order": 21,
    "group": "operations",
    "homeFeatured": true,
    "summary": "Guided workflows that move the school from one academic year to the next, with preview, apply, and undo.",
    "items": [
      "Eight ordered workflows: Year rollover, Leavers, Subject choices, Intake, Promotion and class formation, Teacher allocation, Timetable, Go live",
      "Every run follows Inputs → Checks → editable Proposal → Apply → Revert",
      "Blocking checks link straight to the page that fixes them",
      "Changes applied in one transaction, with a snapshot kept for undo",
      "Deterministic - no AI or outside service, and every run's steps and timings recorded"
    ]
  },
  {
    "slug": "promotion-class-reassignment",
    "title": "Promotion & Class Reassignment",
    "icon": "Shuffle",
    "order": 22,
    "group": "operations",
    "homeFeatured": false,
    "summary": "Preview-then-commit promotion for one-off moves outside the year-end workflows.",
    "items": [
      "Preview computes each student's next grade and a same-class/medium carryover suggestion",
      "Students at the top grade are flagged as graduating, not dropped",
      "Distribute-by-marks or assign-randomly bulk-assist per grade group",
      "Every assignment individually overridable before commit",
      "Nothing visible until the target year is separately flipped to current"
    ]
  },
  {
    "slug": "timetable",
    "title": "Timetable",
    "icon": "CalendarClock",
    "order": 23,
    "group": "operations",
    "homeFeatured": true,
    "summary": "A config → build → validate → review → publish pipeline, built by hand or auto-generated.",
    "items": [
      "Timetable Settings, Grade Sections, Resources & facilities, and Subject Period Requirements",
      "Labs, ECA facilities, and double periods, with fixed home classrooms",
      "Manual grid editor, or one-click auto-generation for a whole grade section with gaps reported",
      "Validation for teacher and room clashes, availability, and period requirements",
      "Submit for Review → Section Head Approve/Reject → Publish",
      "Revise a published timetable into a new chained draft"
    ]
  },
  {
    "slug": "notifications",
    "title": "Notifications",
    "icon": "Bell",
    "order": 24,
    "group": "operations",
    "homeFeatured": true,
    "summary": "In-app notifications with role-scoped recipient targeting and a per-user Notification Center.",
    "items": [
      "Shared composer for admins and teachers, scoped server-side by role and position",
      "Categories and priorities (Normal, Important, Urgent)",
      "Recipient rules: Everyone, By Grade, By Class, By Grade Section, By Subject, or a specific person",
      "Send now or save as draft",
      "Notification Center with Unread/Read/Archived tabs, search, and a category filter"
    ]
  },
  {
    "slug": "reports-analytics",
    "title": "Reports & Analytics",
    "icon": "BarChart3",
    "order": 25,
    "group": "operations",
    "homeFeatured": false,
    "summary": "PDF report export and an aggregate analytics dashboard.",
    "items": [
      "PDF export: Attendance and Marks templates, admin-only",
      "Analytics dashboard: enrollment, attendance trends, performance, notification and timetable stats",
      "Rendered as stat tiles and lightweight charts, no charting library dependency"
    ]
  },
  {
    "slug": "automation",
    "title": "Automation & Watchers",
    "icon": "Bot",
    "order": 26,
    "group": "operations",
    "homeFeatured": false,
    "summary": "Seven background agents that watch for data issues, keep the database backed up, and handle data retention.",
    "items": [
      "Seven agents: structural integrity, people compliance, academic delivery, security audit, system health, data retention, and identity erasure retry",
      "Plain SQL and arithmetic on cron schedules - no AI or outside service",
      "Each agent runs its checks concurrently",
      "Findings go out as in-app notifications to admins, plus dismissible banners on the relevant page",
      "Every agent can be disabled from Settings > Automation, except System Health"
    ]
  }
];

export default features;
