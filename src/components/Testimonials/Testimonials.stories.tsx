import { StoryObj, Meta } from '@storybook/react';

// components
import CustomerTestimonials from 'components/Testimonials';

export default {
  title: 'Components/CustomerTestimonials',
  component: CustomerTestimonials
} as Meta;

type Story = StoryObj<typeof CustomerTestimonials>;

export const Default: Story = {};
