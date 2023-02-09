import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PermissionsSelect } from '.';

export default {
  title: 'component/PermissionsSelect',
  component: PermissionsSelect,
} as ComponentMeta<typeof PermissionsSelect>;

const Template: ComponentStory<typeof PermissionsSelect> = ({ permissions }) => (
  <PermissionsSelect permissions={permissions} />
);

export const Primary = Template.bind({});
Primary.args = {
  permissions: [
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
  ],
};
