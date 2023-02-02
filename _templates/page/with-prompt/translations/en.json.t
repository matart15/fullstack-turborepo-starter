---
inject: true
to: packages/translation/locales/en.json
after: "pages"
skip_if: react-native-fs
---
    "<%= h.changeCase.camel(name) %>": {
      "field": "field"
    },