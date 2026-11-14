import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {ArrowUpRight} from 'lucide-react';
import SeoHead from '@site/src/components/SeoHead';
import {links, moduleCount, latestRelease, formatDate} from '@site/src/data/site';
import {
  PageHero,
  Highlight,
  ReleaseLink,
  Section,
  SectionHead,
  CardGrid,
  Card,
  CtaBand,
} from '@site/src/components/Page';
import styles from './index.module.css';

const DESCRIPTION =
  'OpenSchool is a free, open-source, self-hosted school management system for Sri Lankan schools: students, staff, classes, attendance, timetables and the academic year in one system of record that the school owns.';

const heroFacts = [
  {title: 'Sri Lankan curriculum', body: 'Grades 1–13, from Primary to O/Level and A/Level streams'},
  {title: 'Trilingual', body: 'Sinhala, Tamil and English mediums of instruction'},
  {title: 'Role-based portals', body: 'For administrators, teachers, students and guardians'},
  {title: 'Your own infrastructure', body: 'Deployed and controlled entirely by the school'},
];

const principles = [
  {
    title: 'Modelled on the national system',
    body: 'Grades 1–13, O/Level and A/Level streams, mediums, houses and prefects are part of the data model, not configuration added afterwards.',
  },
  {
    title: 'The school owns its data',
    body: 'Every deployment is self-hosted. Student and guardian records stay on infrastructure the school controls, and the project has no access to any instance.',
  },
  {
    title: 'Open by default',
    body: 'Apache 2.0 licensed and developed in public, with design decisions recorded so anyone can see why the system works the way it does.',
  },
  {
    title: 'Secure by design',
    body: 'Standards-based sign-in, role checks enforced on the server for every request, rate limiting, and an append-only audit log.',
  },
];

const localFit = [
  {title: 'Grade structure', body: 'The full Grade 1–13 flow with lettered class sections, from Primary through Junior, O/Level and A/Level.'},
  {title: 'A/Level streams', body: 'Physical Science, Bio Science, Commerce, Arts and Technology, with stream groups and section codes such as 12-M1.'},
  {title: 'Mediums of instruction', body: 'Sinhala, Tamil and English mediums that carry over automatically when students are promoted.'},
  {title: 'Names and identity', body: 'Full name, name with initials and calling name, never split into first and last. Guardians are matched by NIC.'},
  {title: 'School life', body: 'Houses with automatic balancing, a rank-based prefect board, and societies with a teacher-in-charge.'},
  {title: 'Staff hierarchy', body: 'Principal, Vice Principal, Section Head, Class Teacher and Subject Teacher, each with the reach their position grants.'},
];

const portals = [
  {
    name: 'Administration',
    body: 'School profile, academic structure, staff and student records, year-end workflows, reports and settings.',
  },
  {
    name: 'Teachers',
    body: "Today's attendance, assigned classes and subjects, the published timetable, and tools scoped to their position.",
  },
  {
    name: 'Students',
    body: 'Their own profile, attendance history, term marks, timetable and notifications, and nothing beyond it.',
  },
  {
    name: 'Guardians',
    body: 'An overview across their children with per-child attendance, marks, timetable and school notices.',
  },
];

const stack = [
  {name: 'Go', role: 'Backend REST API', logo: 'img/tech/go.svg'},
  {name: 'PostgreSQL', role: 'Primary database', logo: 'img/tech/postgresql.svg'},
  {name: 'React', role: 'Role-based portals', logo: 'img/tech/react.svg'},
  {name: 'TypeScript', role: 'Type-safe frontend', logo: 'img/tech/typescript.webp'},
  {name: 'Vite', role: 'Frontend build tooling', logo: 'img/tech/vite.svg'},
  {name: 'ThunderID', role: 'Identity and sign-in', logo: 'img/tech/thunderid.webp'},
  {name: 'Ant Design', role: 'Interface components', logo: 'img/tech/antdesign.svg'},
  {name: 'Docker', role: 'Containerised setup', logo: 'img/tech/docker.svg'},
];

function TechCard({name, role, logo}: {name: string; role: string; logo: string}): React.ReactElement {
  const src = useBaseUrl(logo);
  return (
    <li className={styles.techCard}>
      <img src={src} alt="" width={36} height={36} loading="lazy" decoding="async" className={styles.techLogo} />
      <div>
        <div className={styles.techName}>{name}</div>
        <div className={styles.techRole}>{role}</div>
      </div>
    </li>
  );
}

export default function Home(): React.ReactElement {
  return (
    <Layout title="Open-source school management for Sri Lanka" description={DESCRIPTION}>
      <SeoHead path="/" title="Open-source school management for Sri Lanka" description={DESCRIPTION} />

      <PageHero
        variant="home"
        top={latestRelease ? <ReleaseLink version={latestRelease.version} date={formatDate(latestRelease.date)} /> : null}
        title={
          <>
            Open digital infrastructure for <Highlight>Sri Lankan schools</Highlight>
          </>
        }
        lead="A free, open-source system of record for students, staff, classes, attendance and the academic year. Modelled on the national school system, and run on infrastructure the school controls."
        actions={
          <>
            <Link className="os-btn os-btn--primary" to="/docs/intro">
              Read the documentation
            </Link>
            <a className="os-btn os-btn--secondary" href={links.repo} target="_blank" rel="noopener noreferrer">
              View source on GitHub
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          </>
        }
        facts={heroFacts}
      />

      <Section>
        <SectionHead
          title="Built as public digital infrastructure"
          intro="Schools should not have to choose between paper registers and a closed vendor. OpenSchool is shared infrastructure that any school can run, inspect and improve."
          link={{label: 'About the project', to: '/about'}}
        />
        <CardGrid cols={4}>
          {principles.map((p, i) => (
            <Card key={p.title} index={i + 1} title={p.title}>
              <p>{p.body}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section subtle>
        <SectionHead
          title="Aligned with the Sri Lankan education system"
          intro="Generic school software is usually built for other education systems and adapted later. OpenSchool starts from the structure of a Sri Lankan school."
        />
        <CardGrid cols={3}>
          {localFit.map((f) => (
            <Card key={f.title} title={f.title}>
              <p>{f.body}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionHead
          title="Role-based access for every user"
          intro="Everyone signs in at the same place and lands in the portal their role grants. Access is enforced on the server, so students and guardians only see their own records."
          link={{label: `Explore all ${moduleCount} modules`, to: '/features'}}
        />
        <CardGrid cols={4}>
          {portals.map((p) => (
            <Card key={p.name} title={p.name}>
              <p>{p.body}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section subtle>
        <SectionHead
          title="Built on a proven open-source stack"
          intro="Widely adopted components that a school IT team or local integrator can run, maintain and extend without specialist knowledge."
          link={{label: 'How it fits together', to: '/docs/architecture'}}
        />
        <CardGrid cols={4}>
          {stack.map((t) => (
            <TechCard key={t.name} {...t} />
          ))}
        </CardGrid>
      </Section>

      <CtaBand
        title="Developed openly with the community"
        text="OpenSchool has no sales team and no support inbox. Development, questions and decisions all happen in public on GitHub. Contributions from developers, educators and school administrators are welcome."
        actions={
          <>
            <Link className="os-btn os-btn--primary" to="/community">
              Get involved
            </Link>
            <a className="os-btn os-btn--secondary" href={links.discussions} target="_blank" rel="noopener noreferrer">
              Join the discussion
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          </>
        }
      />
    </Layout>
  );
}
