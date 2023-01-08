Feature: Login validation

  Scenario: Bad inputs
    Given some bad inputs
      | email | password | passwordConfirm | errorMessage            |
      |       |          |                 | パスワードを入力してください          |
      |       |   123456 |                 | パスワードは8文字以上で入力してください    |
      |       | 12345678 |                 | パスワードは半角英数字を組み合わせてください  |
      |       | Ab123456 |                 | パスワード確認を入力してください        |
      |       | Ab123456 | passwordConfirm | パスワード確認確認が一致しません        |
      |       | Ab123456 | Ab123456        | メールアドレスを入力してください        |
      | asdf  | Ab123456 | Ab123456        | メールアドレスのフォーマットが正しくありません |
      | asdf  | Ab123456 | Ab123456        | メールアドレスのフォーマットが正しくありません |
    Given some good inputs
      | email         | password | passwordConfirm | errorMessage |
      | asdf@asdf.com | Ab123456 | Ab123456        |              |
    Then errors should match
