import { Button } from 'antd';

import { AllowedLanguages, useCurrentLocale } from '../../utils/common';

export const ChangeLanguage = ({
  handleLocaleChange,
}: {
  handleLocaleChange: (locale: AllowedLanguages) => void;
}): JSX.Element => {
  const currentLocale = useCurrentLocale();
  return (
    <>
      <Button type={currentLocale === 'en' ? 'primary' : 'default'} onClick={(): void => handleLocaleChange('en')}>
        EN
      </Button>
      <Button type={currentLocale === 'ja' ? 'primary' : 'default'} onClick={(): void => handleLocaleChange('ja')}>
        JA
      </Button>
    </>
  );
};
