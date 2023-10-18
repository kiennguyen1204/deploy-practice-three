import { StoryObj, Meta } from '@storybook/react';

// components
import { CategoryProduct } from 'pages/Category';

export default {
  title: 'Components/CategoryProduct',
  component: CategoryProduct
} as Meta;

type Story = StoryObj<typeof CategoryProduct>;

export const Default: Story = {};
