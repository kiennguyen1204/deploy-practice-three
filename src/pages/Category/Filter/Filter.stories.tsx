import { StoryObj, Meta } from '@storybook/react';

// components
import { Filter } from 'pages/Category/Filter';

export default {
  title: 'Components/Filter',
  component: Filter
} as Meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {};
