import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileEdit } from './ProfileEdit';

export default {
  title: 'component/ProfileEdit',
  component: ProfileEdit,
} as ComponentMeta<typeof ProfileEdit>;

const Template: ComponentStory<typeof ProfileEdit> = ({ user }) => <ProfileEdit user={user} />;

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
  },
};
