import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {ArrowUpRight, Download} from 'lucide-react';
import SeoHead from '@site/src/components/SeoHead';
import {PageHero, Highlight} from '@site/src/components/Page';
import changelog, {type ChangelogRelease} from '@site/src/data/generated/changelog';
import contributors from '@site/src/data/generated/contributors';
import {links, GITHUB_URL, formatDate} from '@site/src/data/site';
import styles from './changelog.module.css';

const DESCRIPTION = 'Every OpenSchool release, what changed in it, and where to get the source.';

const nameOf = new Map(contributors.map((c) => [c.login, c.name]));

function countChanges(release: ChangelogRelease): number {
  return release.sections.reduce(
    (n, s) => n + s.blocks.reduce((m, b) => m + (b.type === 'list' ? b.items.length : 0), 0),
    0,
  );
}

function ReleaseCard({
  release,
  latest,
  hidden,
}: {
  release: ChangelogRelease;
  latest: boolean;
  hidden: boolean;
}): React.ReactElement {
  const changes = countChanges(release);

  return (
    <article id={release.slug} className={styles.release} hidden={hidden}>
      <header className={styles.releaseHead}>
        <div className={styles.releaseTitle}>
          <h2 className={styles.version}>{release.version}</h2>
          {latest ? <span className="os-tag os-tag--accent">Latest</span> : null}
          {release.prerelease ? <span className="os-tag">Pre-release</span> : null}
        </div>
        <time dateTime={release.date} className={styles.date}>
          {formatDate(release.date)}
        </time>
      </header>

      {release.summary ? <p className={styles.summary}>{release.summary}</p> : null}

      <div className={styles.actions}>
        <a className="os-link" href={release.githubUrl} target="_blank" rel="noopener noreferrer">
          Release notes
          <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
        </a>
        <a className={styles.download} href={`${GITHUB_URL}/archive/refs/tags/${release.tag}.zip`}>
          <Download size={14} strokeWidth={2} aria-hidden="true" />
          .zip
        </a>
        <a className={styles.download} href={`${GITHUB_URL}/archive/refs/tags/${release.tag}.tar.gz`}>
          <Download size={14} strokeWidth={2} aria-hidden="true" />
          .tar.gz
        </a>
      </div>

      {release.sections.length > 0 ? (
        <>
          <div className={styles.changesHead}>
            What changed
            {changes > 0 ? <span className={styles.count}>{changes}</span> : null}
          </div>

          <div className={styles.panel}>
            {release.sections.map((section) => (
              <section key={section.heading} className={styles.section}>
                <h3 className={styles.sectionHeading}>{section.heading}</h3>
                {section.blocks.map((block, bi) =>
                  block.type === 'paragraph' ? (
                    <p key={bi} className={styles.paragraph}>
                      {block.text}
                    </p>
                  ) : (
                    <ul key={bi} className={styles.items}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ),
                )}
              </section>
            ))}

            {release.contributors.length > 0 ? (
              <section className={styles.section}>
                <h3 className={styles.sectionHeading}>Contributors</h3>
                <ul className={styles.contributors}>
                  {release.contributors.map((login) => (
                    <li key={login}>
                      <a
                        href={`https://github.com/${encodeURIComponent(login)}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                          src={`https://github.com/${encodeURIComponent(login)}.png?size=48`}
                          alt=""
                          width={22}
                          height={22}
                          loading="lazy"
                          decoding="async"
                        />
                        {nameOf.get(login) ?? login}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </>
      ) : null}
    </article>
  );
}

export default function Changelog(): React.ReactElement {
  const brokenLinks = useBrokenLinks();
  changelog.forEach((r) => brokenLinks.collectAnchor(r.slug));

  const [active, setActive] = useState<string | undefined>(changelog[0]?.slug);

  // One release is shown at a time; the version list (or a #v0.2.0 link)
  // switches between them, so older releases never sit below a long page.
  useEffect(() => {
    const fromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      if (changelog.some((r) => r.slug === slug)) setActive(slug);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const select = (event: React.MouseEvent, slug: string) => {
    event.preventDefault();
    setActive(slug);
    window.history.replaceState(null, '', `#${slug}`);
    const list = document.getElementById('releases');
    if (list && list.getBoundingClientRect().top < 0) {
      list.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <Layout title="Changelog" description={DESCRIPTION}>
      <SeoHead path="/changelog" title="Changelog" description={DESCRIPTION} />

      <PageHero
        title={
          <>
            Release <Highlight>history</Highlight>
          </>
        }
        lead="What shipped in each version of OpenSchool. Release notes are published on GitHub and mirrored here."
        actions={
          <a className="os-btn os-btn--secondary" href={links.releases} target="_blank" rel="noopener noreferrer">
            All releases on GitHub
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        }
      />

      <section className={styles.body}>
        <div className={`os-container ${styles.layout}`}>
          <nav className={styles.nav} aria-label="Versions">
            <div className={styles.navLabel}>Versions</div>
            <ul>
              {changelog.map((r, i) => (
                <li key={r.slug}>
                  <a
                    href={`#${r.slug}`}
                    onClick={(e) => select(e, r.slug)}
                    className={r.slug === active ? styles.navActive : undefined}
                    aria-current={r.slug === active ? 'true' : undefined}>
                    <span className={styles.navVersion}>{r.version}</span>
                    <span className={styles.navDate}>
                      {i === 0 ? 'Latest · ' : ''}
                      {formatDate(r.date)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div id="releases" className={styles.list}>
            {changelog.length === 0 ? <p className="os-body">No releases have been published yet.</p> : null}
            {changelog.map((release, i) => (
              <ReleaseCard
                key={release.slug}
                release={release}
                latest={i === 0}
                hidden={release.slug !== active}
              />
            ))}
            <p className={styles.note}>
              OpenSchool is self-hosted. To run a release, check out its tag and follow the{' '}
              <Link to="/docs/setup">setup walkthrough</Link>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
