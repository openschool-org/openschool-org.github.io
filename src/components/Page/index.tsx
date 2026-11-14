import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {ArrowRight} from 'lucide-react';
import styles from './styles.module.css';

/**
 * Shared building blocks for the marketing pages (home, about, ...), so
 * every page uses the same hero, section heading, card grid and closing
 * call-to-action band.
 */

type Fact = {title: string; body: string};

export function PageHero({
  top,
  title,
  lead,
  actions,
  facts,
  variant = 'page',
}: {
  top?: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  facts?: Fact[];
  variant?: 'home' | 'page';
}): ReactNode {
  return (
    <header className={`${styles.hero} ${variant === 'page' ? styles.heroPage : ''}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="os-grid-bg" aria-hidden="true" />
      <div className={`os-container ${styles.heroContainer}`}>
        <div className={styles.heroInner}>
          {top}
          <h1 className={`os-h1 ${styles.heroTitle}`}>{title}</h1>
          <p className={`os-lead ${styles.heroLead}`}>{lead}</p>
          {actions ? <div className={`os-btn-row ${styles.heroActions}`}>{actions}</div> : null}
        </div>
        {facts ? (
          <dl className={styles.heroFacts}>
            {facts.map((f) => (
              <div key={f.title} className={styles.heroFact}>
                <dt>{f.title}</dt>
                <dd>{f.body}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </header>
  );
}

export function Highlight({children}: {children: ReactNode}): ReactNode {
  return <span className={styles.highlight}>{children}</span>;
}

export function ReleaseLink({version, date}: {version: string; date: string}): ReactNode {
  return (
    <Link to="/changelog" className={styles.release}>
      <span className={styles.releaseTag}>{version}</span>
      <span className={styles.releaseSep} aria-hidden="true">·</span>
      <span>Released {date}</span>
      <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
    </Link>
  );
}

export function Section({subtle, children}: {subtle?: boolean; children: ReactNode}): ReactNode {
  return (
    <section className={`${styles.section} ${subtle ? styles.sectionSubtle : ''}`}>
      <div className="os-container">{children}</div>
    </section>
  );
}

export function SectionHead({
  title,
  intro,
  link,
  center,
}: {
  title: string;
  intro?: ReactNode;
  link?: {label: string; to: string};
  center?: boolean;
}): ReactNode {
  return (
    <div className={`${styles.head} ${center ? styles.headCenter : ''}`}>
      <div className={styles.headText}>
        <h2 className="os-h2">{title}</h2>
        {intro ? <p className="os-body">{intro}</p> : null}
      </div>
      {link ? (
        <Link className={`os-link ${styles.headLink}`} to={link.to}>
          {link.label}
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

export function CardGrid({cols, className, children}: {cols: 2 | 3 | 4; className?: string; children: ReactNode}): ReactNode {
  const colClass = cols === 2 ? styles.cards2 : cols === 3 ? styles.cards3 : styles.cards4;
  return <ul className={[styles.cards, colClass, className].filter(Boolean).join(' ')}>{children}</ul>;
}

export function Card({
  index,
  title,
  children,
  footer,
}: {
  index?: number;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}): ReactNode {
  return (
    <li className={styles.card}>
      {index !== undefined ? <span className={styles.cardIndex}>{String(index).padStart(2, '0')}</span> : null}
      <h3 className="os-h3">{title}</h3>
      <div className={styles.cardBody}>{children}</div>
      {footer ? <div className={styles.cardFooter}>{footer}</div> : null}
    </li>
  );
}

export function CtaBand({title, text, actions}: {title: string; text: ReactNode; actions: ReactNode}): ReactNode {
  return (
    <section className={styles.closingWrap}>
      <div className="os-container">
        <div className={styles.closing}>
          <div className={styles.closingPattern} aria-hidden="true" />
          <div className={styles.closingGrid}>
            <div>
              <h2 className={`os-h2 ${styles.closingTitle}`}>{title}</h2>
              <p className={styles.closingText}>{text}</p>
            </div>
            <div className={styles.closingActions}>{actions}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const pageStyles = styles;
