import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// components
import ItemCard from './index';

export default {
  title: 'Components/ItemCard',
  component: ItemCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof ItemCard>;

export const Default: Story = {
  args: {
    item: {
      id: 'sampleId',
      isSoldOut: true,
      discount: 0,
      image: 'sample-image.jpg',
      title: 'Sample Title',
      category: 'Sample Category',
      name: 'Sample Name',
      rate: '5',
      reviews: 0,
      sale: 'Sample Sale',
      price: 0,
      volume: [],
      description: 'Sample Description',
    },
  },
};
