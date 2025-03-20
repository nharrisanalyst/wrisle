import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import DeleteDialog from './';

const meta = {
  title: 'TableOptions/DeleteDialog',
  component: DeleteDialog,
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
    text: {control:'text'},
    onDelete:{ action: 'clicked' },
    onClose:{ action: 'clicked' },
    isOpen:{control:'boolean'},
    actionText:{ control: 'text' }
  },
} satisfies Meta<typeof DeleteDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    deleteText: 'Delete',
    onDelete: ()=> {console.log('deleted')},
    onClose:()=> {console.log('closed')},
    deleteNoun:'tabel_this_name.csv',
    isOpen: true,
    actionButtonText:'I want to delete this',
    actionText:'Warning Pressing delete will delete this table',
    isDelete:true
  },
};