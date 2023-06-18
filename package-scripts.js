const path = require('path');

const uiPath = path.resolve(__dirname, 'packages/ui');
const validationPath = path.resolve(__dirname, 'packages/validations');
const translationPath = path.resolve(__dirname, 'packages/translation');
const webPath = path.resolve(__dirname, 'apps/web');

const ciWebPath = path.resolve(__dirname, 'out/apps/web');

module.exports = {
  scripts: {
    open: {
      default: 'nps open.web',
      web: `cd ${webPath} && yarn open`,
    },
    prepare: {
      default: `nps prepare.web`,
      web: `yarn`,
      supabase: `npx supabase start`,
      ci: {
        web: `npx turbo prune --scope=web && cd out && yarn install --frozen-lockfile`,
      },
    },
    lint: {
      default: `nps lint.web lint.ui lint.translation`,
      web: `cd ${webPath} && yarn lint:fix`,
      ui: `cd ${uiPath} && yarn lint:fix`,
      translation: `cd ${translationPath} && yarn lint:fix && yarn check-translations`,
    },
    test: {
      default: `nps test.validation`,
      web: `cd ${webPath} && yarn test`,
      validation: `cd ${validationPath} && yarn test`,
      ci: {
        default: `nps test.ci.web`,
        web: `cd ${ciWebPath} && yarn test:ci`,
      },
      watch: {
        default: `nps test.watch.web`,
        web: `cd ${webPath} && yarn test:ci`,
      },
    },
    codegen: {
      default: 'nps codegen.web',
      web: `cd ${webPath} && yarn codegen`,
    },
    generate: {
      page: {
        list: 'hygen page list',
        edit: 'hygen page edit',
        new: 'hygen page new',
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
      },
    },
    docker: {
      build: {
        default: 'nps docker.build.web',
        web: `docker build -t web . -f ${webPath}/Dockerfile`,
      },
    },
    dev: 'nps prepare.supabase && npx turbo run dev',
    storybook: `cd ${uiPath} && yarn storybook`,
  },
};
