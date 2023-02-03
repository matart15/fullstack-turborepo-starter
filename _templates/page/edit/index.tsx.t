---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/[id]/index.tsx
---
import { 
  <%= h.changeCase.pascal(name) %>DetailDocument,
  <%= h.changeCase.pascal(name) %>DetailQuery 
  useUpdate<%= h.changeCase.pascal(name) %>Mutation,
} from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps, NextPage } from 'next';
import { SiteLayout } from 'ui/components/common/Layout';
import { <%= h.changeCase.pascal(name) %>EditView } from 'ui/views/<%= h.changeCase.pascal(name) %>EditView';

type <%= h.changeCase.pascal(name) %>EditProps = {
  <%= h.changeCase.camel(name) %>: <%= h.changeCase.pascal(name) %>DetailQuery['findUnique<%= h.changeCase.pascal(name) %>'];
};
const <%= h.changeCase.pascal(name) %>Edit: NextPage<<%= h.changeCase.pascal(name) %>EditProps> = (data: <%= h.changeCase.pascal(name) %>EditProps): JSX.Element => {
  const { <%= h.changeCase.camel(name) %> } = data;
  const [update<%= h.changeCase.pascal(name) %>Mutation] = useUpdate<%= h.changeCase.pascal(name) %>Mutation();
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  return (
    <SiteLayout breadCrumbItems={['Home', '<%= h.changeCase.pascal(name) %>', 'Edit']}>
      <<%= h.changeCase.pascal(name) %>EditView
        <%= h.changeCase.camel(name) %>={<%= h.changeCase.camel(name) %>}
        onFinish={async (value): Promise<void> => {
          try {
            const s = await update<%= h.changeCase.pascal(name) %>Mutation({
              variables: {
                id: value.id,
                data: {
                  field: value.field,
                },
              },
            });
            popup.success(i18n.t('common.succeeded'));
          } catch (error) {
            popup.error(error);
          }
      />
    </SiteLayout>
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
    const <%= h.changeCase.camel(name) %>DetailQueryResult = await client.query<<%= h.changeCase.pascal(name) %>DetailQuery>({
      query: <%= h.changeCase.pascal(name) %>DetailDocument,
      variables: {
        where: {
          id,
        },
      },
    });
    return {
      props: {
        <%= h.changeCase.camel(name) %>: <%= h.changeCase.camel(name) %>DetailQueryResult.data.findUnique<%= h.changeCase.pascal(name) %>,
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

export default <%= h.changeCase.pascal(name) %>Edit;
