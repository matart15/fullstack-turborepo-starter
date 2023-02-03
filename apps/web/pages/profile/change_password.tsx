import { useChangePasswordMutation } from 'graphql/generated';
import i18n from 'translation';
import { popup } from 'ui/components/popup';
import { ChangePasswordInterface, ChangePasswordView } from 'ui/views/ChangePassword';

const ChangePasswordPage = (): JSX.Element => {
  const [changePasswordMutation] = useChangePasswordMutation();
  return (
    <ChangePasswordView
      onSubmit={async (fields: ChangePasswordInterface): Promise<void> => {
        if (!fields.newPassword || fields.newPassword !== fields.password) {
          return;
        }
        try {
          changePasswordMutation({
            variables: {
              data: {
                newPassword: fields.newPassword,
              },
            },
          });
          popup.success(i18n.t('common.succeeded'));
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error(error.message);
          }
        }
        /* Handle form submission */
      }}
    />
  );
};

export default ChangePasswordPage;
