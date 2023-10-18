import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// components
import InfoBottom from 'components/Info';

export default {
  title: 'Components/InfoBottom',
  component: InfoBottom,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof InfoBottom>;

export const Default: Story = {};
