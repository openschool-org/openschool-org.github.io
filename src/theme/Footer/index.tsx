import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig, type MultiColumnFooter} from '@docusaurus/theme-common';
import {GITHUB_ORG_URL} from '@site/src/data/site';
import styles from './styles.module.css';

function Footer(): ReactNode {
  const {footer} = useThemeConfig();
  const logoSrc = useBaseUrl('img/brand/logo.webp');
  if (!footer) {
    return null;
  }

  const {links, copyright} = footer as MultiColumnFooter;
  const columns = links ?? [];

  return (
    <footer className="footer">
      <div className="os-container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.brandRow}>
              <img src={logoSrc} alt="" aria-hidden="true" className={styles.brandLogo} width={24} height={24} />
              <span className={styles.brandName}>OpenSchool</span>
            </Link>
            <p className={styles.tagline}>
              Free and open-source school management, built for the Sri Lankan education system.
            </p>
          </div>

          <nav className={styles.columns} aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title} className={styles.column}>
                <div className={styles.columnTitle}>{col.title}</div>
                <ul className={styles.columnList}>
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        href={item.href}
                        className={styles.columnLink}
                        target={item.href ? '_blank' : undefined}
                        rel={item.href ? 'noopener noreferrer' : undefined}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <span>{copyright}</span>
          <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" className={styles.bottomLink}>
            github.com/openschool-org
          </a>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
