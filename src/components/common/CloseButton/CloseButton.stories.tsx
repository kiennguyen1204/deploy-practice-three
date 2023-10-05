import type { Meta, StoryObj } from '@storybook/react';

// components
import CloseButton from 'components/common/CloseButton';

const meta: Meta<typeof CloseButton> = {
  component: CloseButton
};

type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  args: {
    onClick: () => CloseButton
  }
};

export default meta;
