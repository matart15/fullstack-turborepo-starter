---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/list/<%= h.changeCase.pascal(name) %>.stories.tsx
---
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { <%= h.changeCase.pascal(name) %>List } from '.';

export default {
  title: 'component/<%= h.changeCase.pascal(name) %>List',
  component: <%= h.changeCase.pascal(name) %>List,
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>List>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>List> = ({ <%= h.changeCase.camel(name) %>s, handleDelete }) => (
  <<%= h.changeCase.pascal(name) %>List <%= h.changeCase.camel(name) %>s={<%= h.changeCase.camel(name) %>s}  handleDelete={handleDelete} />
);

export const Primary = Template.bind({});
Primary.args = {
  <%= h.changeCase.camel(name) %>s: [
    {
      customField: 'customField1',
    },
    {
      customField: 'customField2',
    },
  ],
};
