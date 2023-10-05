import type { Meta, StoryObj } from '@storybook/react';

// constants
import { BUTTON_VARIANT } from 'constants/enums';

// components
import Button from 'components/common/Button';

const meta: Meta<typeof Button> = {
  component: Button
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: BUTTON_VARIANT.PRIMARY
  }
};

export const Secondary: Story = {
  render: () => <Button label='Button' variant={BUTTON_VARIANT.SECONDARY} onClick={() => {}} />
};

export default meta;
