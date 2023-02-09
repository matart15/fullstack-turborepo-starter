Feature: User validation

  Scenario: Bad inputs
    Given some bad inputs
      | email | errorMessage     |
      |       | メールアドレスを入力してください |
    Given some good inputs
      | email         | errorMessage |
      | asdf@asdf.com |              |
    Then errors should match
