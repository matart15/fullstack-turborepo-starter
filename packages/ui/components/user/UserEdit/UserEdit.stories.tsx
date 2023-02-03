import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserEdit } from '.';

export default {
  title: 'component/UserEdit',
  component: UserEdit,
} as ComponentMeta<typeof UserEdit>;

const Template: ComponentStory<typeof UserEdit> = ({ user, onFinish, editMode }) => {
  return (
    <UserEdit
      editMode={editMode}
      user={user}
      onFinish={onFinish}
      allPermissions={[
        {
          id: 'per123',
          tableName: 'permission 123',
          operation: 'read',
        },
        {
          id: 'per456',
          tableName: 'permission 456',
          operation: 'read',
        },
        {
          id: 'asdf123',
          tableName: 'asdf 123',
          operation: 'read',
        },
        {
          id: 'asdf456',
          tableName: 'asdf 456',
          operation: 'read',
        },
      ]}
    />
  );
};

export const Empty = Template.bind({});
Empty.args = {};
export const ViewMode = Template.bind({});
ViewMode.args = {
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

export const EditMode = Template.bind({});
EditMode.args = {
  editMode: true,
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
