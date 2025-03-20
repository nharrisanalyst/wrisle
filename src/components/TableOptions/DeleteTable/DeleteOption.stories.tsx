import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import DeleteTable from './';

const meta = {
  title: 'TableOptions/DeleteOption',
  component: DeleteTable,
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
} satisfies Meta<typeof DeleteTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};