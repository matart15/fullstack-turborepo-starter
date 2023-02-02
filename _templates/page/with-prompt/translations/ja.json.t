---
inject: true
to: packages/translation/locales/ja.json
after: "pages"
skip_if: react-native-fs
---
    "<%= h.changeCase.camel(name) %>": {
      "field": "フィールド"
    },