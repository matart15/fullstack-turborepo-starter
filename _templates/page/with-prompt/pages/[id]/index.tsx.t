---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/[id]/index.tsx
---
import { <%= h.changeCase.pascal(name) %>DetailDocument, <%= h.changeCase.pascal(name) %>DetailQuery } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps, NextPage } from 'next';
import { SiteLayout } from 'ui/components/Layout';
import { <%= h.changeCase.pascal(name) %>DetailView } from 'ui/views/<%= h.changeCase.pascal(name) %>DetailView';

type <%= h.changeCase.pascal(name) %>DetailProps = {
  <%= h.changeCase.camel(name) %>: <%= h.changeCase.pascal(name) %>DetailQuery['findUnique<%= h.changeCase.pascal(name) %>'];
};
const <%= h.changeCase.pascal(name) %>Detail: NextPage<<%= h.changeCase.pascal(name) %>DetailProps> = (data: <%= h.changeCase.pascal(name) %>DetailProps): JSX.Element => {
  const { <%= h.changeCase.camel(name) %> } = data;
  return (
    <SiteLayout breadCrumbItems={['Home', '<%= h.changeCase.pascal(name) %>', 'Detail']}>
      <<%= h.changeCase.pascal(name) %>DetailView
        <%= h.changeCase.camel(name) %>={<%= h.changeCase.camel(name) %>}
        onFinish={(value): void => {
          // eslint-disable-next-line no-console
          console.log('onFinish', value);
        }}
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

export default <%= h.changeCase.pascal(name) %>Detail;
