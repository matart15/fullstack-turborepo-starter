// storybook for my layout component:
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SiteLayout } from './index';

export default {
  title: 'component/SiteLayout',
  component: SiteLayout,
} as ComponentMeta<typeof SiteLayout>;

const Template: ComponentStory<typeof SiteLayout> = ({ children, breadCrumbItems }) => (
  <SiteLayout breadCrumbItems={breadCrumbItems}>{children}</SiteLayout>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <>hello world</>,
  breadCrumbItems: ['Home', 'App', 'Dashboard'],
};
