import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RoleDetail } from '.';

export default {
  title: 'component/RoleDetail',
  component: RoleDetail,
} as ComponentMeta<typeof RoleDetail>;

const Template: ComponentStory<typeof RoleDetail> = ({ role }) => <RoleDetail role={role} />;

export const Primary = Template.bind({});
Primary.args = {
  role: {
    id: '12345',
    name: 'manager',
    description: 'some description',
  },
};
