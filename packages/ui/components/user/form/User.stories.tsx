import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FORM_MODE } from '../../../utils/formMode';
import { UserForm } from '.';

export default {
  title: 'component/UserForm',
  component: UserForm,
} as ComponentMeta<typeof UserForm>;

const Template: ComponentStory<typeof UserForm> = ({ user, onFinish, formMode }) => {
  return (
    <UserForm
      formMode={formMode}
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

export const createMode = Template.bind({});
createMode.args = {
  formMode: FORM_MODE.CREATE,
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

export const editMode = Template.bind({});
editMode.args = {
  formMode: FORM_MODE.EDIT,
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
