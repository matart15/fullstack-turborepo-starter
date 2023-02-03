const path = require('path');

const apiPath = path.resolve(__dirname, 'apps/api');
const uiPath = path.resolve(__dirname, 'packages/ui');
const validationPath = path.resolve(__dirname, 'packages/validations');
const translationPath = path.resolve(__dirname, 'packages/translation');
const webPath = path.resolve(__dirname, 'apps/web');

const ciApiPath = path.resolve(__dirname, 'out/apps/api');
const ciWebPath = path.resolve(__dirname, 'out/apps/web');

module.exports = {
  scripts: {
    open: {
      default: 'nps open.web open.api',
      web: `cd ${webPath} && yarn open`,
      api: `cd ${apiPath} && yarn open`,
    },
    prepare: {
      default: `nps prepare.web prepare.api`,
      web: `yarn`,
      api: `nps prepare.envFile prepare.docker prisma.migrate.dev`,
      envFile: `cd ${apiPath} && [[ -f .env ]] || cp -n .env.example .env`,
      docker: 'docker-compose up -d',
      ci: {
        web: `npx turbo prune --scope=web && cd out && yarn install --frozen-lockfile`,
        api: `npx turbo prune --scope=api && cd out && yarn install --frozen-lockfile && nps prisma.generate`,
      },
    },
    lint: {
      default: `nps lint.web lint.api lint.ui lint.translation`,
      web: `cd ${webPath} && yarn lint:fix`,
      api: `cd ${apiPath} && yarn lint:fix`,
      ui: `cd ${uiPath} && yarn lint:fix`,
      translation: `cd ${translationPath} && yarn lint:fix`,
    },
    test: {
      default: `nps test.validation`,
      web: `cd ${webPath} && yarn test`,
      api: `cd ${apiPath} && yarn test`,
      validation: `cd ${validationPath} && yarn test`,
      ci: {
        default: `nps test.ci.web test.ci.api`,
        web: `cd ${ciWebPath} && yarn test:ci`,
        api: `cd ${ciApiPath} && yarn test:ci`,
      },
      watch: {
        default: `nps test.watch.web test.watch.api`,
        web: `cd ${webPath} && yarn test:ci`,
        api: `cd ${apiPath} && yarn test:watch`,
      },
    },
    prisma: {
      generate: `cd ${apiPath} && npx prisma generate`,
      studio: `cd ${apiPath} && npx prisma studio`,
      seed: `cd ${apiPath} && yarn ts-node prisma/seed.ts`,
      migrate: `cd ${apiPath} && npx prisma migrate dev`,
      reset: `cd ${apiPath} && npx prisma migrate reset --force dev`,
    },
    codegen: {
      default: 'nps codegen.web',
      web: `cd ${webPath} && yarn codegen`,
    },
    generate: {
      api: `hygen api new`,
      page: {
        list: 'hygen page list',
        edit: 'hygen page edit',
      },
      component: {
        list: 'hygen component list',
        form: 'hygen component form',
      },
      validation: 'hygen validation new',
    },
    build: {
      default: 'npx turbo run build',
      ci: {
        web: 'cd out && npm run build',
        api: 'cd out && npm run build',
      },
    },
    docker: {
      build: {
        default: 'nps docker.build.web docker.build.api',
        web: `docker build -t web . -f ${webPath}/Dockerfile`,
        api: `docker build -t api . -f ${apiPath}/Dockerfile`,
      },
    },
    dev: 'nps prepare.docker && npx turbo run dev',
    storybook: `cd ${uiPath} && yarn storybook`,
  },
};
