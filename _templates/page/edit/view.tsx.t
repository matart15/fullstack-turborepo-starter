---
to: packages/ui/views/<%= h.changeCase.pascal(name) %>EditView.tsx
---
import { SiteLayout } from 'ui/components/common/Layout';
import { <%= h.changeCase.pascal(name) %>Form, <%= h.changeCase.pascal(name) %>FormProps } from 'ui/components/<%= h.changeCase.camel(name) %>/form';

import { FormModeSwitch } from '../utils/FormModeSwitch';

export const <%= h.changeCase.pascal(name) %>EditView = ({ <%= h.changeCase.camel(name) %>, onFinish }: <%= h.changeCase.pascal(name) %>FormProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', '<%= h.changeCase.pascal(name) %>', 'Detail']}>
      <FormModeSwitch>
        <<%= h.changeCase.pascal(name) %>Form <%= h.changeCase.camel(name) %>={<%= h.changeCase.camel(name) %>} onFinish={onFinish} />
      </FormModeSwitch>
    </SiteLayout>
  );
};
