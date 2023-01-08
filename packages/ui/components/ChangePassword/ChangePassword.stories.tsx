import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ChangePassword } from '.';

export default {
  title: 'component/ChangePassword',
  component: ChangePassword,
} as ComponentMeta<typeof ChangePassword>;

const Template: ComponentStory<typeof ChangePassword> = ({ onSubmit }) => <ChangePassword onSubmit={onSubmit} />;

export const Primary = Template.bind({});
Primary.args = {
  recaptchaSitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
};
