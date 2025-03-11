import type { Meta, StoryObj } from '@storybook/react';
import Table from './';

const meta = {
  title: 'components/Table',
  component: Table,
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
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tableData:{
     id:"abcdefg",
     name:'Untitled',
     data:{
        headers:["name", "age", "tall"],
        rows:[
            {
                "name":"me",
                "age":22,
                "tall":true
            },
            {
                "name":"you",
                "age":25,
                "tall":false
            },
            {
                "name":"other",
                "age":35,
                "tall":true
            }
        ]
     },
     dateCreated: new Date()
    }
  }
}