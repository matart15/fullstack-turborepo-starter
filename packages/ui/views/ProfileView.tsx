import { Col, Row } from 'antd';
import { AllowedLanguages } from 'constants/index';
import Link from 'next/link';
import { ChangeLanguage } from 'ui/components/common/ChangeLanguage';
import { SiteLayout } from 'ui/components/common/Layout';
import { ProfileEdit } from 'ui/components/Profile/ProfileEdit';
import { User } from 'ui/components/user/form/hooks';

export const ProfileView = ({
  user,
  handleLocaleChange,
}: {
  user?: User | null;
  handleLocaleChange: (locale: AllowedLanguages) => void;
}): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', 'App', 'Dashboard']}>
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
    </SiteLayout>
  );
};
