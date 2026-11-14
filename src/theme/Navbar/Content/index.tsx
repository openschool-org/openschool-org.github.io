import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig, ErrorCauseBoundary, ThemeClassNames} from '@docusaurus/theme-common';
import {splitNavbarItems, useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarSearch from '@theme/Navbar/Search';
import GitHubStars from '@site/src/components/GitHubStars';

import styles from './styles.module.css';

function NavbarBrand(): ReactNode {
  const mark = useBaseUrl('img/brand/logo.webp');
  return (
    <Link to="/" className="navbar__brand navbar-brand" aria-label="OpenSchool home">
      <img
        src={mark}
        className="navbar-brand-mark-img"
        alt=""
        width={32}
        height={32}
        decoding="async"
        fetchPriority="high"
      />
      <span className="navbar-brand-text">OpenSchool</span>
    </Link>
  );
}

function useNavbarItems() {
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items}: {items: NavbarItemConfig[]}): ReactNode {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

export default function NavbarContent(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <div className="navbar__inner">
      <div className={clsx(ThemeClassNames.layout.navbar.containerLeft, 'navbar__items')}>
        {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
        <NavbarBrand />
        <NavbarItems items={leftItems} />
      </div>
      <div className={clsx(ThemeClassNames.layout.navbar.containerRight, 'navbar__items navbar__items--right')}>
        <NavbarColorModeToggle className={styles.colorModeToggle} />
        <GitHubStars className={styles.githubStars} />
        <NavbarItems items={rightItems} />
        {!searchBarItem && (
          <NavbarSearch>
            <SearchBar />
          </NavbarSearch>
        )}
      </div>
    </div>
  );
}
