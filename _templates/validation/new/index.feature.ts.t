---
to: packages/validations/<%= h.changeCase.pascal(name) %>/index.feature
---

Feature: Login validation

  Scenario: Bad inputs
    Given some bad inputs
      | field | errorMessage            |
      |      | フィールドを入力してください          |
    Given some good inputs
      | field      | errorMessage |
      | some data |              |
    Then errors should match
