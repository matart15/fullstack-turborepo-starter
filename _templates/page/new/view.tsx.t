---
to: packages/ui/views/<%= h.changeCase.pascal(name) %>AddView.tsx
---
import { SiteLayout } from 'ui/components/common/Layout';
import { <%= h.changeCase.pascal(name) %>Form, <%= h.changeCase.pascal(name) %>FormProps } from 'ui/components/<%= h.changeCase.camel(name) %>/form';
import { FORM_MODE } from 'ui/utils/formMode';

export const <%= h.changeCase.pascal(name) %>AddView = ({ onFinish }: <%= h.changeCase.pascal(name) %>FormProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', '<%= h.changeCase.pascal(name) %>', 'New']}>
      <<%= h.changeCase.pascal(name) %>Form onFinish={onFinish} formMode={FORM_MODE.CREATE} />
    </SiteLayout>
  );
};
