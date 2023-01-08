import { useChangePasswordMutation } from 'types/graphql';
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
