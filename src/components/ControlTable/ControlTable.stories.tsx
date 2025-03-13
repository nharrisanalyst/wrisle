import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ControlTable from './';

const meta = {
  title: 'components/ControlTable',
  component: ControlTable,
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
    pageCount:{control:'number'},
    rowCount:{control:'number'}
  },
} satisfies Meta<typeof ControlTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    pageCount:0,
    rowCount:25,
  },
};