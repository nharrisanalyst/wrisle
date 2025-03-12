import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TableSide from './';

const meta = {
  title: 'components/SidePanel/TableSide',
  component: TableSide,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1200px' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TableSide>;

export default meta;
type Story = StoryObj<typeof TableSide>;

export const Primary: Story = {
  args: {
  },
};