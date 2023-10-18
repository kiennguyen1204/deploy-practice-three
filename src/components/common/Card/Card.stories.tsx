import { StoryObj, Meta } from '@storybook/react';
import Card from './index';

export default {
  title: 'Components/Card',
  component: Card
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    classes: '',
    title: 'Example Card',
    iShowAll: true,
    children: 'Card Content'
  }
};
