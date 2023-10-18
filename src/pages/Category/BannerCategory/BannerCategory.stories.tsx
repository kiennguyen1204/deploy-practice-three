import { StoryObj, Meta } from '@storybook/react';

// components
import { BannerCategory } from 'pages/Category/BannerCategory';

export default {
  title: 'Components/BannerCategory',
  component: BannerCategory
} as Meta;

type Story = StoryObj<typeof BannerCategory>;

export const Default: Story = {};
