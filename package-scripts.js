const path = require('path');

const apiPath = path.resolve(__dirname, 'apps/api');
const uiPath = path.resolve(__dirname, 'packages/ui');
const webPath = path.resolve(__dirname, 'apps/web');

const ciApiPath = path.resolve(__dirname, 'out/apps/api');
const ciWebPath = path.resolve(__dirname, 'out/apps/web');

module.exports = {
  scripts: {
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
      default: `nps lint.web lint.api lint.ui`,
      web: `cd ${webPath} && yarn lint:fix`,
      api: `cd ${apiPath} && yarn lint:fix`,
      ui: `cd ${uiPath} && yarn lint:fix`,
    },
    test: {
      default: `nps test.web test.api`,
      web: `cd ${webPath} && yarn test:watch`,
      api: `cd ${apiPath} && yarn test:watch`,
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
      default: 'nps codegen web',
      web: `cd ${webPath} && yarn codegen`,
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
  },
};
