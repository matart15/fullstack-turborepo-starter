import { PermissionListDocument, PermissionListQuery, useCreateUserMutation } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps, NextPage } from 'next';
import i18n from 'translation/index';
import { popup } from 'ui/components/popup';
import { useCurrentLocale } from 'ui/utils/common';
import { UserAddView } from 'ui/views/UserAddView';

type UserDetailProps = {
  allPermissions: PermissionListQuery['findManyPermissions'];
};
const UserAdd: NextPage<UserDetailProps> = (data: UserDetailProps): JSX.Element => {
  const { allPermissions } = data;
  const [createUserMutation] = useCreateUserMutation();
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  return (
    <UserAddView
      allPermissions={allPermissions.map(permission => ({
        name: `${permission.tableName}.${permission.operation}`,
        id: permission.id,
      }))}
      onFinish={async (value): Promise<void> => {
        try {
          await createUserMutation({
            variables: {
              data: {
                email: value.email,
                name: value.name,
                role: { connect: { id: value.role?.id || '1' } },
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
  const client = initializeApollo({
    context,
  });
  try {
    const permissionListQueryResult = await client.query<PermissionListQuery>({
      query: PermissionListDocument,
    });
    return {
      props: {
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

export default UserAdd;
