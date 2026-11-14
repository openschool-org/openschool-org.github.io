import React, {useCallback, useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {ArrowRight, Check, X} from 'lucide-react';
import SeoHead from '@site/src/components/SeoHead';
import {PageHero, Highlight, CtaBand} from '@site/src/components/Page';
import {layers, moduleCount, type Layer} from '@site/src/data/site';
import type {Feature, FeatureGroup} from '@site/src/data/generated/features';
import styles from './features.module.css';

type Filter = 'all' | FeatureGroup;

const allModules = layers.flatMap((l) => l.modules);
const layerOf = new Map<string, Layer>(layers.flatMap((l) => l.modules.map((m) => [m.slug, l] as const)));

function ModuleCard({module, onOpen}: {module: Feature; onOpen: (slug: string) => void}): React.ReactElement {
  return (
    <li>
      <button type="button" className={styles.card} onClick={() => onOpen(module.slug)} aria-haspopup="dialog">
        <span className={styles.cardTitle}>{module.title}</span>
        <span className={styles.cardSummary}>{module.summary}</span>
        <ul className={styles.preview}>
          {module.items.slice(0, 3).map((item) => (
            <li key={item}>
              <Check size={15} strokeWidth={2.25} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <span className={styles.cardFooter}>
          {module.items.length > 3 ? `View all ${module.items.length} capabilities` : 'View details'}
          <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
        </span>
      </button>
    </li>
  );
}

function ModulePanel({module, onClose}: {module: Feature; onClose: () => void}): React.ReactElement {
  const closeRef = useRef<HTMLButtonElement>(null);
  const layer = layerOf.get(module.slug);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <aside
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="module-panel-title"
        onClick={(e) => e.stopPropagation()}>
        <div className={styles.panelHead}>
          {layer ? <span className={styles.panelLayer}>{layer.title}</span> : null}
          <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <X size={18} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
        <h2 id="module-panel-title" className={styles.panelTitle}>
          {module.title}
        </h2>
        <p className={styles.panelSummary}>{module.summary}</p>
        <h3 className={styles.panelSub}>
          Capabilities <span className={styles.count}>{module.items.length}</span>
        </h3>
        <ul className={styles.capabilities}>
          {module.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default function Features(): React.ReactElement {
  const brokenLinks = useBrokenLinks();
  layers.forEach((layer) => {
    brokenLinks.collectAnchor(layer.group);
    layer.modules.forEach((m) => brokenLinks.collectAnchor(m.slug));
  });

  const [filter, setFilter] = useState<Filter>('all');
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  // Deep links: #attendance-management opens that module, #operations
  // filters to that layer.
  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (allModules.some((m) => m.slug === id)) setOpenSlug(id);
      else if (layers.some((l) => l.group === id)) setFilter(id as FeatureGroup);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const open = useCallback((slug: string) => {
    setOpenSlug(slug);
    window.history.replaceState(null, '', `#${slug}`);
  }, []);

  const close = useCallback(() => {
    setOpenSlug(null);
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }, []);

  const openModule = allModules.find((m) => m.slug === openSlug);
  const visibleLayers = filter === 'all' ? layers : layers.filter((l) => l.group === filter);
  const description = `${moduleCount} modules across the foundation, academic structure, people and daily operations of a school.`;

  return (
    <Layout title="Features" description={description}>
      <SeoHead path="/features" title="Features and modules" description={description} />

      <PageHero
        title={
          <>
            Platform features and <Highlight>modules</Highlight>
          </>
        }
        lead={`${moduleCount} modules, organised in four layers. Filter by layer, then select any module to see everything it does.`}
      />

      <div className={styles.filterBar}>
        <div className={`os-container ${styles.filterInner}`}>
          <div className={styles.tabs} role="tablist" aria-label="Filter modules by layer">
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              className={filter === 'all' ? styles.tabActive : styles.tab}
              onClick={() => setFilter('all')}>
              All modules <span className={styles.tabCount}>{moduleCount}</span>
            </button>
            {layers.map((l) => (
              <button
                key={l.group}
                type="button"
                role="tab"
                aria-selected={filter === l.group}
                className={filter === l.group ? styles.tabActive : styles.tab}
                onClick={() => setFilter(l.group)}>
                {l.title} <span className={styles.tabCount}>{l.modules.length}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`os-container ${styles.content}`}>
        {visibleLayers.map((layer) => (
          <section key={layer.group} id={layer.group} className={styles.layer} aria-labelledby={`${layer.group}-title`}>
            <div className={styles.layerHead}>
              <h2 id={`${layer.group}-title`} className={styles.layerTitle}>
                {layer.title}
                <span className={styles.layerCount}>{layer.modules.length} modules</span>
              </h2>
              <p className={styles.layerDesc}>{layer.desc}</p>
            </div>
            <ul className={styles.grid}>
              {layer.modules.map((m) => (
                <ModuleCard key={m.slug} module={m} onOpen={open} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      <CtaBand
        title="See every module in action"
        text="The setup walkthrough takes a fresh instance from empty to operational and tours each module hands-on."
        actions={
          <Link className="os-btn os-btn--primary" to="/docs/setup">
            Setup walkthrough
          </Link>
        }
      />

      {openModule ? <ModulePanel module={openModule} onClose={close} /> : null}
    </Layout>
  );
}
