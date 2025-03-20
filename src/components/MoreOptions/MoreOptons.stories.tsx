import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import MoreOptions from './';
import DeleteTable from '../TableOptions/DeleteTable';

const meta = {
  title: 'tableoptions/MoreOptions',
  component: MoreOptions,
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
} satisfies Meta<typeof MoreOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title:'Table Options',
    children:<DeleteTable name="test-name" id={'test-id-abc'} />
  },
};