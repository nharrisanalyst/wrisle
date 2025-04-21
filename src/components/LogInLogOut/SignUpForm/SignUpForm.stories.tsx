import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SignUpForm  from './';

const meta = {
  title: 'components/LoginLogOut/SignUpForm  ',
  component: SignUpForm,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1200px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof SignUpForm  >;

export default meta;
type Story = StoryObj<typeof SignUpForm >;

export const Primary: Story = {
  args: {
  },
};