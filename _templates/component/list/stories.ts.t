---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/list/<%= h.changeCase.pascal(name) %>.stories.tsx
---
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { <%= h.changeCase.pascal(name) %>List } from '.';

export default {
  title: 'component/<%= h.changeCase.pascal(name) %>List',
  component: <%= h.changeCase.pascal(name) %>List,
  argTypes: { handleDelete: { action: 'handleDelete' } },
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>List>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>List> = ({ <%= h.changeCase.camel(name) %>s, handleDelete }) => (
  <<%= h.changeCase.pascal(name) %>List <%= h.changeCase.camel(name) %>s={<%= h.changeCase.camel(name) %>s}  handleDelete={handleDelete} />
);

export const Primary = Template.bind({});
Primary.args = {
  <%= h.changeCase.camel(name) %>s: [
    {
      id: '1',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      customField: 'customField1',
    },
    {
      id: '2',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      customField: 'customField2',
    },
  ],
};
