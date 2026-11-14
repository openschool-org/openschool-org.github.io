import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig, type MultiColumnFooter} from '@docusaurus/theme-common';
import {ArrowUpRight} from 'lucide-react';
import {links, latestRelease} from '@site/src/data/site';
import styles from './styles.module.css';

function GithubIcon(): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

function Footer(): ReactNode {
  const {footer} = useThemeConfig();
  const logoSrc = useBaseUrl('img/brand/logo.webp');
  if (!footer) {
    return null;
  }

  const {links: columns = [], copyright} = footer as MultiColumnFooter;

  return (
    <footer className="footer">
      <div className="os-container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.brandRow} aria-label="OpenSchool home">
              <img src={logoSrc} alt="" className={styles.brandLogo} width={32} height={32} />
              <span className={styles.brandName}>OpenSchool</span>
            </Link>
            <p className={styles.tagline}>
              Open digital infrastructure for Sri Lankan schools. Free, self-hosted and maintained
              by the community.
            </p>
            <div className={styles.brandActions}>
              <a className={styles.githubLink} href={links.repo} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
                View on GitHub
              </a>
              {latestRelease ? (
                <Link to="/changelog" className={styles.version}>
                  {latestRelease.version}
                </Link>
              ) : null}
            </div>
          </div>

          <nav className={styles.columns} aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title}>
                <div className={styles.columnTitle}>{col.title}</div>
                <ul className={styles.columnList}>
                  {col.items.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a className={styles.columnLink} href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.label}
                          <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" className={styles.external} />
                        </a>
                      ) : (
                        <Link className={styles.columnLink} to={item.to}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <span>{copyright}</span>
          <span>
            Made with{' '}
            <span role="img" aria-label="love">
              ❤️
            </span>{' '}
            by Sri Lankans
          </span>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
