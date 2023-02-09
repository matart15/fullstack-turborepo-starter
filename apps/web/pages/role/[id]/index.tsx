import { RoleDetailDocument, RoleDetailQuery, useUpdateRoleMutation } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps, NextPage } from 'next';
import i18n from 'translation';
import { popup } from 'ui/components/popup';
import { useCurrentLocale } from 'ui/utils/common';
import { RoleEditView } from 'ui/views/RoleEditView';

type RoleEditProps = {
  role: RoleDetailQuery['findUniqueRole'];
};
const RoleEdit: NextPage<RoleEditProps> = (data: RoleEditProps): JSX.Element => {
  const { role } = data;
  const [updateRoleMutation] = useUpdateRoleMutation();
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  return (
    <RoleEditView
      role={role}
      onFinish={async (value): Promise<void> => {
        try {
          await updateRoleMutation({
            variables: {
              id: value.id,
              data: {
                name: value.name,
                description: value.description,
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
    const roleDetailQueryResult = await client.query<RoleDetailQuery>({
      query: RoleDetailDocument,
      variables: {
        where: {
          id,
        },
      },
    });
    return {
      props: {
        role: roleDetailQueryResult.data.findUniqueRole,
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

export default RoleEdit;
