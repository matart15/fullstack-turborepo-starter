---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/edit/<%= h.changeCase.pascal(name) %>.stories.tsx
---
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { <%= h.changeCase.pascal(name) %>Edit } from '.';

export default {
  title: 'component/<%= h.changeCase.pascal(name) %>Edit',
  component: <%= h.changeCase.pascal(name) %>Edit,
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>Edit>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>Edit> = ({ <%= h.changeCase.camel(name) %>, onFinish, editMode }) => (
  <<%= h.changeCase.pascal(name) %>Edit
    editMode={editMode}
    <%= h.changeCase.camel(name) %>={<%= h.changeCase.camel(name) %>}
    onFinish={onFinish}
  />
);

export const Empty = Template.bind({});
Empty.args = {
  <%= h.changeCase.camel(name) %>: {
    id: '12345',
    customField: 'customField1',
  },
};

export const ViewMode = Template.bind({});
ViewMode.args = {
  <%= h.changeCase.camel(name) %>: {
    id: '12345',
    customField: 'customField1',
  },
};

export const EditMode = Template.bind({});
EditMode.args = {
  editMode: true,
  <%= h.changeCase.camel(name) %>: {
    id: '12345',
    customField: 'customField1',
  },
};