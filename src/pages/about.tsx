import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {ArrowRight, ArrowUpRight} from 'lucide-react';
import SeoHead from '@site/src/components/SeoHead';
import {
  PageHero,
  Highlight,
  Section,
  SectionHead,
  CardGrid,
  Card,
  CtaBand,
} from '@site/src/components/Page';
import {links} from '@site/src/data/site';
import styles from './about.module.css';

const DESCRIPTION =
  'Why OpenSchool exists, the principles it is built on, and how the project is run.';

const principles = [
  {
    title: 'Fit the national system first',
    body: 'The data model follows the structure of a Sri Lankan school: Grades 1–13, O/Level and A/Level streams, mediums of instruction, houses, prefects and the staff hierarchy.',
  },
  {
    title: 'Schools keep control of their data',
    body: 'Each deployment belongs to the school that runs it. The project never sees, stores or processes any school’s records.',
  },
  {
    title: 'Transparency by default',
    body: 'The source, issue tracker, release history and the reasoning behind significant design decisions are all public and open to audit.',
  },
];

type GovItem = {title: string; body: string; label: string; to?: string; href?: string};

const governance: GovItem[] = [
  {
    title: 'Open development',
    body: 'All work happens in public through issues and pull requests, reviewed by maintainers before it is merged.',
    label: 'Source repository',
    href: links.repo,
  },
  {
    title: 'Recorded decisions',
    body: 'Significant design choices are documented as architecture decision records, including their trade-offs and known weaknesses.',
    label: 'Decision records',
    to: '/docs/adr',
  },
  {
    title: 'Responsible disclosure',
    body: 'Security vulnerabilities are reported privately and handled under the published security policy, never in public issues.',
    label: 'Security policy',
    href: links.security,
  },
];

function GovLink({item}: {item: GovItem}): React.ReactElement {
  return item.href ? (
    <a className="os-link" href={item.href} target="_blank" rel="noopener noreferrer">
      {item.label}
      <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
    </a>
  ) : (
    <Link className="os-link" to={item.to}>
      {item.label}
      <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
    </Link>
  );
}

export default function About(): React.ReactElement {
  return (
    <Layout title="About" description={DESCRIPTION}>
      <SeoHead path="/about" title="About the project" description={DESCRIPTION} />

      <PageHero
        title={
          <>
            Why we&apos;re building <Highlight>OpenSchool</Highlight>
          </>
        }
        lead="Schools should not have to choose between paper registers and a closed vendor. OpenSchool is a shared, open-source alternative that any school can run and improve."
      />

      <Section>
        <SectionHead title="Mission and vision" />
        <CardGrid cols={2}>
          <Card title="Mission">
            <p className={styles.statement}>
              Give every school a structured, secure and self-hosted system of record for its
              academic data, modelled on the Sri Lankan education system and free for anyone to use.
            </p>
          </Card>
          <Card title="Vision">
            <p className={styles.statement}>
              A shared, community-maintained platform that schools, education offices and local
              integrators can run, inspect and extend, instead of each school rebuilding the same
              records from scratch.
            </p>
          </Card>
        </CardGrid>
      </Section>

      <Section subtle>
        <SectionHead title="Guiding principles" />
        <CardGrid cols={3}>
          {principles.map((p, i) => (
            <Card key={p.title} index={i + 1} title={p.title}>
              <p>{p.body}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionHead
          title="How the project is run"
          link={{label: 'Contributing guide', to: '/docs/contributing'}}
        />
        <CardGrid cols={3}>
          {governance.map((g) => (
            <Card key={g.title} title={g.title} footer={<GovLink item={g} />}>
              <p>{g.body}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <CtaBand
        title="Bring OpenSchool to your school"
        text="The documentation covers setup, identity configuration and a walkthrough of every module."
        actions={
          <>
            <Link className="os-btn os-btn--primary" to="/docs/intro">
              Read the documentation
            </Link>
            <Link className="os-btn os-btn--secondary" to="/community">
              Get involved
            </Link>
          </>
        }
      />
    </Layout>
  );
}
