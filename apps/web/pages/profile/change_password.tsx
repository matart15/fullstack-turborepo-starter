import { useChangePasswordMutation } from 'types/graphql';
import ChangePassword, { ChangePasswordInputValues } from 'ui/src/ui-components/ChangePassword';

const ChangePasswordPage = (): JSX.Element => {
  const [changePasswordMutation] = useChangePasswordMutation();
  return (
    <ChangePassword
      onSubmit={(fields: ChangePasswordInputValues): void => {
        if (!fields.newPassword || fields.newPassword !== fields.confirmPassword) {
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
          console.warn('success');
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
