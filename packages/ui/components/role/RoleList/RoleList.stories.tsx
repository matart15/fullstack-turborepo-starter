import { ComponentMeta, ComponentStory } from '@storybook/react';

import { RoleList } from '.';

export default {
  title: 'component/RoleList',
  component: RoleList,
} as ComponentMeta<typeof RoleList>;

const Template: ComponentStory<typeof RoleList> = ({ roles }) => <RoleList roles={roles} />;

export const Primary = Template.bind({});
Primary.args = {
  roles: [
    {
      email: 'manager@asdf.com',
      password: 'Ab123456',
      emailConfirmedAt: new Date(),
      confirmationCode: '123',
      role: {
        create: {
          name: 'manager',
        },
      },
    },
    {
      email: 'role@asdf.com',
      password: 'Ab123456',
      emailConfirmedAt: new Date(),
      confirmationCode: '456',
      role: {
        create: {
          name: 'role',
        },
      },
    },
  ],
};
