import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SignUp } from '.';

export default {
  title: 'component/SignUp',
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = ({ onSubmit, openTemporaryRegister, recaptchaSitekey }) => (
  <SignUp onSubmit={onSubmit} openTemporaryRegister={openTemporaryRegister} recaptchaSitekey={recaptchaSitekey} />
);

export const Primary = Template.bind({});
Primary.args = {
  recaptchaSitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
};
