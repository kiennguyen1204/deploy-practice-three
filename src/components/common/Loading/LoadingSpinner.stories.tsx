import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// components
import LoadingSpinner from 'components/common/Loading';

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {};
