# OpenSchool Website

The website and documentation for [OpenSchool](https://github.com/openschool-org/openschool), a free and open-source school management system built for Sri Lankan schools.

The site is live at [openschool.lk](https://openschool.lk) and is built with [Docusaurus](https://docusaurus.io).

## Getting started

Requires Node.js 20 or later and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm start
```

The site runs at `http://localhost:3000`. Use `pnpm build` for a production build.

## Content

- Pages are in `src/pages`.
- Documentation is in `docs`, with navigation in `sidebars.ts`.
- Feature and module descriptions are in `src/data/features`.
- The changelog is pulled from [GitHub Releases](https://github.com/openschool-org/openschool/releases) at build time.

Files in `src/data/generated` are created automatically on every start and build, so edit the sources above instead.

## Contributing

Issues and pull requests are welcome. See the [contributing guide](https://openschool.lk/docs/contributing) to get started.

## License

OpenSchool is released under the [Apache License 2.0](LICENSE).
