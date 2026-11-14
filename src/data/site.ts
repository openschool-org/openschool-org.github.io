import features, {type Feature, type FeatureGroup} from '@site/src/data/generated/features';
import changelog from '@site/src/data/generated/changelog';
import contributors, {type Contributor} from '@site/src/data/generated/contributors';

export const SITE_URL = 'https://openschool.lk';
export const GITHUB_ORG_URL = 'https://github.com/openschool-org';
export const GITHUB_URL = 'https://github.com/openschool-org/openschool';
export const WEBSITE_REPO_URL = 'https://github.com/openschool-org/openschool-web';

export const links = {
  repo: GITHUB_URL,
  issues: `${GITHUB_URL}/issues`,
  newIssue: `${GITHUB_URL}/issues/new/choose`,
  discussions: `${GITHUB_URL}/discussions`,
  releases: `${GITHUB_URL}/releases`,
  contributors: `${GITHUB_URL}/graphs/contributors`,
  license: `${GITHUB_URL}/blob/main/LICENSE`,
  security: `${GITHUB_URL}/blob/main/SECURITY.md`,
  contributing: `${GITHUB_URL}/blob/main/CONTRIBUTING.md`,
  codeOfConduct: `${GITHUB_URL}/blob/main/CODE_OF_CONDUCT.md`,
};

export type Layer = {
  group: FeatureGroup;
  number: string;
  title: string;
  desc: string;
  modules: Feature[];
};

const layerMeta: Record<FeatureGroup, Omit<Layer, 'group' | 'modules'>> = {
  foundation: {
    number: '01',
    title: 'Foundation',
    desc: 'The school profile, identity and account lifecycle, the in-app leadership hierarchy, role-based portals, and the audit log. Every other module depends on this layer.',
  },
  structure: {
    number: '02',
    title: 'Academic structure',
    desc: 'How a school year is organised before any student is enrolled: academic years, the Grade 1–13 flow, A/L streams, mediums of instruction, and the curriculum.',
  },
  people: {
    number: '03',
    title: 'People & classes',
    desc: 'Students, teachers, guardians, non-academic staff, houses, the prefect board, and societies, placed into the academic structure.',
  },
  operations: {
    number: '04',
    title: 'Daily operations',
    desc: 'The work of a school day and a school year: attendance, academic records, year-end workflows, timetabling, notifications, reporting, and background automation.',
  },
};

const ORDER: FeatureGroup[] = ['foundation', 'structure', 'people', 'operations'];

export const layers: Layer[] = ORDER.map((group) => ({
  group,
  ...layerMeta[group],
  modules: features.filter((f) => f.group === group),
}));

export const moduleCount = features.length;
export const capabilityCount = features.reduce((sum, f) => sum + f.items.length, 0);

export const latestRelease = changelog[0];

// Display order on the Community page. Anyone not listed follows, in
// the order they first appear in the release history.
const TEAM_ORDER = ['HasithaErandika', 'chamals3n4', 'Krishmal2004'];

function rank(login: string): number {
  const i = TEAM_ORDER.indexOf(login);
  return i === -1 ? TEAM_ORDER.length : i;
}

export const team: Contributor[] = [...contributors].sort((a, b) => rank(a.login) - rank(b.login));

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}
