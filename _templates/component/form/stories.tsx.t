---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/form/<%= h.changeCase.pascal(name) %>.stories.tsx
---
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FORM_MODE } from '../../../utils/formMode';

import { <%= h.changeCase.pascal(name) %>Form } from '.';

export default {
  title: 'component/<%= h.changeCase.pascal(name) %>Form',
  component: <%= h.changeCase.pascal(name) %>Form,
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>Form>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>Form> = ({ <%= h.changeCase.camel(name) %>, onFinish, formMode }) => (
  <<%= h.changeCase.pascal(name) %>Form
    formMode={formMode}
    <%= h.changeCase.camel(name) %>={<%= h.changeCase.camel(name) %>}
    onFinish={onFinish}
  />
);

export const Empty = Template.bind({});
Empty.args = {
  <%= h.changeCase.camel(name) %>: {
    id: '12345',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
    customField: 'customField1',
  },
};

export const ViewMode = Template.bind({});
ViewMode.args = {
  <%= h.changeCase.camel(name) %>: {
    id: '12345',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
    customField: 'customField1',
  },
};

export const createMode = Template.bind({});
createMode.args = {
  formMode: FORM_MODE.CREATE,
  <%= h.changeCase.camel(name) %>: {
    id: '12345',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
    customField: 'customField1',
  },
};

export const editMode = Template.bind({});
editMode.args = {
  formMode: FORM_MODE.EDIT,
  <%= h.changeCase.camel(name) %>: {
    id: '12345',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
    customField: 'customField1',
  },
};