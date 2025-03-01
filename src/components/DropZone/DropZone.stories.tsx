import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import DropZone from './';

const meta = {
  title: 'components/DropZone',
  component: DropZone,
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
  },
} satisfies Meta<typeof DropZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};