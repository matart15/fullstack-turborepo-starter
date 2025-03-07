# Turborepo (NestJS + Prisma + NextJS + Tailwind + Typescript + Jest) Starter

This is fullstack turborepo starter. It comes with the following features.

- ✅ Turborepo
- ✅ Nestjs
  - ✅ Env Config with Validation
  - ✅ Prisma
- ✅ NextJS
  - ✅ Redux Toolkit Query
- Testing using Jest
  - ✅ validations
    - ✅ coverage
  - [ ]UI
- [ ] e2e test
- [ ] translation key check
  - i18n-scanner
  - pagename / component name translation
- [ ] not use hardcoded string for routes
- ✅ Authentication
- ✅ Authorization
- ✅ Github Actions
- ✅ Reverse Proxy using Nginx
- ✅ Docker Integration
- ✅ Postgres Database
- ✅ Package scripts using NPS

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `api`: a [NestJS](https://nestjs.com/) app
- `web`: a [Next.js](https://nextjs.org) app
- `ui`: a stub React component library used by `web`.
- `config`: `eslint`, `nginx` (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [Node Package Scripts](https://github.com/sezna/nps#readme) for automation scripts
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This starter kit is using turborepo and yarn workspaces for monorepo workflow.

npx @matart15/fullstack-turborepo-starter <your-project-name>

### Prerequisites

- Install nps by running

```
npm i -g nps
```

- Make sure docker and docker-compose are
  installed. Refer to docs for your operating system.

### Install Dependencies

Make sure you are at root of the project and just run

```
nps prepare
```

### Build

To build all apps and packages, run the following command at the root of project:

```
nps build
```

### Develop

To develop all apps and packages, run the following command at the root of project:

```
nps dev
```

- open http://localhost:3000 ( web )
- open http://localhost:5000/graphql ( api )

login data can be found in `seed.ts`

The app should be running at `http://localhost` with reverse proxy configured.

## Other available commands

Run `nps` in the terminal to see list of all available commands.

## troubleshoot

[troubleshoot](/docs/troubleshoot.md)
