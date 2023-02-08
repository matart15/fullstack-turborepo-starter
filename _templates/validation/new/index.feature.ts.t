---
to: packages/validations/<%= h.changeCase.pascal(name) %>/index.feature
---

Feature: <%= h.changeCase.pascal(name) %> validation

  Scenario: Bad inputs
    Given some bad inputs
      | customField | errorMessage            |
      |      | フィールドを入力してください          |
    Given some good inputs
      | customField      | errorMessage |
      | some data |              |
    Then errors should match
