Feature: Role validation

  Scenario: Bad inputs
    Given some bad inputs
      | name | errorMessage  |
      |      | ロール名を入力してください |
    Given some good inputs
      | name      | errorMessage |
      | some data |              |
    Then errors should match
