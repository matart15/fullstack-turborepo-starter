---
to: packages/ui/views/<%= h.changeCase.pascal(name) %>EditView.tsx
---
import { SiteLayout } from '../components/common/Layout';
import { <%= h.changeCase.pascal(name) %>Edit, <%= h.changeCase.pascal(name) %>EditProps } from '../components/<%= h.changeCase.camel(name) %>/<%= h.changeCase.pascal(name) %>Edit';
import { EditViewModeSwitch } from '../utils/EditViewModeSwitch';

export const <%= h.changeCase.pascal(name) %>EditView = ({ <%= h.changeCase.camel(name) %>, onFinish, allPermissions }: <%= h.changeCase.pascal(name) %>EditProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', '<%= h.changeCase.pascal(name) %>', 'Detail']}>
      <EditViewModeSwitch>
        <<%= h.changeCase.pascal(name) %>Edit <%= h.changeCase.camel(name) %>={<%= h.changeCase.camel(name) %>} onFinish={onFinish} allPermissions={allPermissions} />
      </EditViewModeSwitch>
    </SiteLayout>
  );
};
