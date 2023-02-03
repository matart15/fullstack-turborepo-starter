---
to: packages/ui/views/<%= h.changeCase.pascal(name) %>ListView.tsx
---
import { SiteLayout } from '../components/common/Layout';
import { <%= h.changeCase.pascal(name) %>List, <%= h.changeCase.pascal(name) %>ListProps } from '../components/<%= h.changeCase.camel(name) %>/<%= h.changeCase.pascal(name) %>List';

export const <%= h.changeCase.pascal(name) %>ListView = (p: <%= h.changeCase.pascal(name) %>ListProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', '<%= h.changeCase.pascal(name) %>']}>
      <<%= h.changeCase.pascal(name) %>List {...p} />
    </SiteLayout>
  );
};
