import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FORM_MODE } from '../../../utils/formMode';
import { RoleForm } from '.';

export default {
  title: 'component/RoleForm',
  component: RoleForm,
} as ComponentMeta<typeof RoleForm>;

const Template: ComponentStory<typeof RoleForm> = ({ role, onFinish, formMode }) => (
  <RoleForm formMode={formMode} role={role} onFinish={onFinish} />
);

export const Empty = Template.bind({});
Empty.args = {
  role: {
    id: '12345',
    name: 'manager',
    description: 'some description',
  },
};

export const ViewMode = Template.bind({});
ViewMode.args = {
  role: {
    id: '12345',
    name: 'manager',
    description: 'some description',
  },
};

export const createMode = Template.bind({});
createMode.args = {
  formMode: FORM_MODE.CREATE,
  role: {
    id: '12345',
    name: 'manager',
    description: 'some description',
  },
};

export const editMode = Template.bind({});
editMode.args = {
  formMode: FORM_MODE.EDIT,
  role: {
    id: '12345',
    name: 'manager',
    description: 'some description',
  },
};
