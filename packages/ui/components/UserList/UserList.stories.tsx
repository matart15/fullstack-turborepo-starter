import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserList } from '.';

export default {
  title: 'component/UserList',
  component: UserList,
} as ComponentMeta<typeof UserList>;

const Template: ComponentStory<typeof UserList> = ({ users }) => <UserList users={users} />;

export const Primary = Template.bind({});
Primary.args = {
  users: [
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
      email: 'user@asdf.com',
      password: 'Ab123456',
      emailConfirmedAt: new Date(),
      confirmationCode: '456',
      role: {
        create: {
          name: 'user',
        },
      },
    },
  ],
};
