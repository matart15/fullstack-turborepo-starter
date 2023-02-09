import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserList } from '.';

export default {
  title: 'component/UserList',
  component: UserList,

  argTypes: { handleDelete: { action: 'handleDelete' } },
} as ComponentMeta<typeof UserList>;

const Template: ComponentStory<typeof UserList> = ({ users, handleDelete }) => {
  return <UserList users={users} handleDelete={handleDelete} />;
};

export const Primary = Template.bind({});
Primary.args = {
  users: [
    {
      id: '12345',
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
      id: '67890',
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
