import { Col, Row } from 'antd';
import { AllowedLanguages } from 'constants/index';
import Link from 'next/link';

import { ChangeLanguage } from '../components/ChangeLanguage';
import { ProfileEdit } from '../components/Profile/ProfileEdit';
import { User } from '../components/UserList/hooks';

export const ProfileView = ({
  user,
  handleLocaleChange,
}: {
  user?: User | null;
  handleLocaleChange: (locale: AllowedLanguages) => void;
}): JSX.Element => {
  return (
    <Row justify="center">
      <Col span={20}>
        <ChangeLanguage handleLocaleChange={handleLocaleChange} />
        <ProfileEdit user={user} />
        <Row>
          <Link href="/sign_in">signin</Link>
        </Row>
        <Row>
          <Link href="/sign_up">signup</Link>
        </Row>
        <Row>
          <Link href="/profile/change_password">change_password</Link>
        </Row>
      </Col>
    </Row>
  );
};
