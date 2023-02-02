---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/index.tsx
---
import { <%= h.changeCase.pascal(name) %>ListDocument, <%= h.changeCase.pascal(name) %>ListQuery } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps } from 'next';
import { SiteLayout } from 'ui/components/Layout';
import { <%= h.changeCase.pascal(name) %>ListView } from 'ui/views/<%= h.changeCase.pascal(name) %>ListView';

const <%= h.changeCase.pascal(name) %>List = (data: { <%= h.changeCase.camel(name) %>List: <%= h.changeCase.pascal(name) %>ListQuery['findMany<%= h.changeCase.pascal(name) %>s'] }): JSX.Element => {
  const { <%= h.changeCase.camel(name) %>List } = data;
  return (
    <SiteLayout breadCrumbItems={['Home', '<%= h.changeCase.pascal(name) %>']}>
      <<%= h.changeCase.pascal(name) %>ListView <%= h.changeCase.camel(name) %>s={<%= h.changeCase.camel(name) %>List} />
    </SiteLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async context => {
  const client = initializeApollo({
    context,
  });
  try {
    const <%= h.changeCase.camel(name) %>ListQueryResult = await client.query<<%= h.changeCase.pascal(name) %>ListQuery>({
      query: <%= h.changeCase.pascal(name) %>ListDocument,
    });
    return {
      props: {
        <%= h.changeCase.camel(name) %>List: <%= h.changeCase.camel(name) %>ListQueryResult.data.findMany<%= h.changeCase.pascal(name) %>s,
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
export default <%= h.changeCase.pascal(name) %>List;
