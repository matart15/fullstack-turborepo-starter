import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserDetail } from '.';

export default {
  title: 'component/UserDetail',
  component: UserDetail,
} as ComponentMeta<typeof UserDetail>;

const Template: ComponentStory<typeof UserDetail> = ({ user, onFinish }) => (
  <UserDetail
    user={user}
    onFinish={onFinish}
    allPermissions={[
      {
        id: 'per123',
        name: 'permission 123',
      },
      {
        id: 'per456',
        name: 'permission 456',
      },
      {
        id: 'asdf123',
        name: 'asdf 123',
      },
      {
        id: 'asdf456',
        name: 'asdf 456',
      },
    ]}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  user: {
    id: '12345',
    createdAt: '2022-01-01T00:00:00.000Z',
    updatedAt: '2022-02-01T00:00:00.000Z',
    email: 'user@example.com',
    name: 'John Doe',
    password: 'password123',
    emailConfirmedAt: '2022-01-05T00:00:00.000Z',
    confirmationCode: 'abcdef',
    permissions: ['per123', 'asdf456'],
  },
};
