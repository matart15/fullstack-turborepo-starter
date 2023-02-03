import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SignInType } from 'constants/signIn';

import { SignIn } from '.';

export default {
  title: 'component/SignIn',
  component: SignIn,
  argTypes: {
    signInType: { control: 'select' },
  },
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = ({
  onSubmit,
  openTemporaryRegister,
  signInType = SignInType.User,
  recaptchaSitekey,
}) => (
  <SignIn
    onSubmit={onSubmit}
    openTemporaryRegister={openTemporaryRegister}
    signInType={signInType}
    recaptchaSitekey={recaptchaSitekey}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  signInType: SignInType.User,
  recaptchaSitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
};
