Feature: Login validation

  Scenario: Bad inputs
    Given some bad inputs
      | email | password | errorMessage            |
      |       |          | パスワードを入力してください          |
      | asdf  |          | パスワードを入力してください          |
      |       | asdf     | パスワードは8文字以上で入力してください    |
      |       | asdfasdf | パスワードは半角英数字を組み合わせてください  |
      |       | Ab123456 | メールアドレスを入力してください        |
      | asdf  | Ab123456 | メールアドレスのフォーマットが正しくありません |
    Given some good inputs
      | email         | password | errorMessage            |
      | asdf@asdf.com | Ab123456 | メールアドレスのフォーマットが正しくありません |
    Then errors should match
