import {
  PermissionListDocument,
  PermissionListQuery,
  UserDetailDocument,
  UserDetailQuery,
  useUpdateUserMutation,
} from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps, NextPage } from 'next';
import i18n from 'translation/index';
import { popup } from 'ui/components/popup';
import { useCurrentLocale } from 'ui/utils/common';
import { UserEditView } from 'ui/views/UserEditView';

type UserDetailProps = {
  user: UserDetailQuery['findUniqueUser'];
  allPermissions: PermissionListQuery['findManyPermissions'];
};
const UserDetail: NextPage<UserDetailProps> = (data: UserDetailProps): JSX.Element => {
  const { user, allPermissions } = data;
  const [updateUserMutation] = useUpdateUserMutation();
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  return (
    <UserEditView
      user={user}
      allPermissions={allPermissions.map(permission => ({
        name: `${permission.tableName}.${permission.operation}`,
        id: permission.id,
      }))}
      onFinish={async (value): Promise<void> => {
        try {
          await updateUserMutation({
            variables: {
              id: value.id,
              data: {
                email: value.email,
                name: value.name,
                emailConfirmedAt: value.emailConfirmedAt,
                confirmationCode: value.confirmationCode,
                permissions: {
                  set: value.permissions,
                },
              },
            },
          });
          popup.success(i18n.t('common.succeeded'));
        } catch (error) {
          popup.error(error);
        }
      }}
    />
  );
};
export const getServerSideProps: GetServerSideProps = async context => {
  // const cookies = context.req.headers.cookie;
  // const { params } = context
  // const { ticketId } = params as { ticketId: string }

  const { id } = context.query;

  const client = initializeApollo({
    context,
  });
  try {
    const userDetailQueryResult = await client.query<UserDetailQuery>({
      query: UserDetailDocument,
      variables: {
        where: {
          id,
        },
      },
    });
    const permissionListQueryResult = await client.query<PermissionListQuery>({
      query: PermissionListDocument,
    });
    return {
      props: {
        user: userDetailQueryResult.data.findUniqueUser,
        allPermissions: permissionListQueryResult.data.findManyPermissions,
      },
    };
  } catch (_error) {
    return {
      redirect: {
        destination: '/sign_in',
        permanent: false,
      },
    };
  }
};

export default UserDetail;
