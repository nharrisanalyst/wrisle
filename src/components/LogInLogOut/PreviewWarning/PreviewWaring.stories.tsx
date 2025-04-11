import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import PreviewWarning from './';

const meta = {
  title: 'components/LoginLogOut/PreviewWarning',
  component: PreviewWarning,
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
} satisfies Meta<typeof PreviewWarning>;

export default meta;
type Story = StoryObj<typeof PreviewWarning>;

export const Primary: Story = {
  args: {
  },
};