Feature: Login validation

  Scenario: Bad inputs
    Given some bad inputs
      | password | newPassword     | errorMessage           |
      |          |                 | パスワードを入力してください         |
      |   123456 |                 | パスワードは8文字以上で入力してください   |
      | 12345678 |                 | パスワードは半角英数字を組み合わせてください |
      | Ab123456 |                 | パスワード確認を入力してください       |
      | Ab123456 | passwordConfirm | パスワード確認確認が一致しません       |
    Given some good inputs
      | password | newPassword | errorMessage |
      | Ab123456 | Ab123456    |              |
    Then errors should match
