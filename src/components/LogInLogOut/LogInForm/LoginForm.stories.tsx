import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import LoginForm  from './';

const meta = {
  title: 'components/LoginLogOut/LoginForm ',
  component: LoginForm ,
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
} satisfies Meta<typeof LoginForm >;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {
  },
};