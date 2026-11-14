import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {ArrowRight, ArrowUpRight} from 'lucide-react';
import SeoHead from '@site/src/components/SeoHead';
import {PageHero, Highlight, Section, SectionHead, CardGrid, Card} from '@site/src/components/Page';
import {links, team} from '@site/src/data/site';
import styles from './community.module.css';

const DESCRIPTION =
  'Meet the people building OpenSchool, and find out how to contribute, ask a question, or report a bug or security issue.';

type Channel = {
  title: string;
  body: string;
  label: string;
  to?: string;
  href?: string;
};

const channels: Channel[] = [
  {
    title: 'Contribute',
    body: 'Set up the development environment and follow the contributing guide for code and documentation changes.',
    label: 'Contributing guide',
    to: '/docs/contributing',
  },
  {
    title: 'Ask a question',
    body: 'Use GitHub Discussions for questions about running OpenSchool, feature proposals and general conversation.',
    label: 'Discussions',
    href: links.discussions,
  },
  {
    title: 'Report a bug',
    body: 'Open an issue with steps to reproduce, what you expected to happen and what happened instead.',
    label: 'Issue tracker',
    href: links.issues,
  },
  {
    title: 'Report a vulnerability',
    body: 'Never open a public issue for a security problem. Use private vulnerability reporting instead.',
    label: 'Security policy',
    href: links.security,
  },
];

function ChannelLink({c}: {c: Channel}): React.ReactElement {
  return c.href ? (
    <a className="os-link" href={c.href} target="_blank" rel="noopener noreferrer">
      {c.label}
      <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
    </a>
  ) : (
    <Link className="os-link" to={c.to}>
      {c.label}
      <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
    </Link>
  );
}

export default function Community(): React.ReactElement {
  return (
    <Layout title="Community" description={DESCRIPTION}>
      <SeoHead path="/community" title="Community" description={DESCRIPTION} />

      <PageHero
        title={
          <>
            Giving back to <Highlight>free education</Highlight>
          </>
        }
        lead="Many of us were educated through Sri Lanka’s free education system. OpenSchool is our way of giving back: volunteers building open, public infrastructure for the schools that taught us."
        actions={
          <>
            <Link className="os-btn os-btn--primary" to="/docs/contributing">
              Start contributing
            </Link>
            <a className="os-btn os-btn--secondary" href={links.repo} target="_blank" rel="noopener noreferrer">
              View on GitHub
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          </>
        }
      />

      <Section>
        <SectionHead
          center
          title="Core maintainers"
          intro="The team that maintains OpenSchool, reviews contributions and publishes releases."
        />
        <ul className={styles.people}>
          {team.map(({login, name}) => (
            <li key={login}>
              <a href={`https://github.com/${encodeURIComponent(login)}`} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://github.com/${encodeURIComponent(login)}.png?size=192`}
                  alt=""
                  width={88}
                  height={88}
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles.personName}>{name}</span>
                <span className={styles.personHandle}>@{login}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section subtle>
        <SectionHead
          title="Ways to take part"
          intro={
            <>
              Participation in every project space is governed by the{' '}
              <Link to="/docs/code-of-conduct">Contributor Covenant</Link>.
            </>
          }
        />
        <CardGrid cols={4}>
          {channels.map((c) => (
            <Card key={c.title} title={c.title} footer={<ChannelLink c={c} />}>
              <p>{c.body}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>
    </Layout>
  );
}
