import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

// components
import { WeedEducationPattern } from 'components/Education/index';

export default {
  title: 'Components/WeedEducationPattern',
  component: WeedEducationPattern,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof WeedEducationPattern>;

export const Default: Story = {};
