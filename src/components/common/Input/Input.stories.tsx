import type { Meta, StoryObj } from '@storybook/react';

// constants
import { INPUT_VARIANT } from 'constants/enums';

// components
import Input from 'components/common/Input';

const meta: Meta<typeof Input> = {
  component: Input
};

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    title: 'Input',
    variant: INPUT_VARIANT.PRIMARY
  }
};

export const Default: Story = {
  args: {
    title: 'Input',
    variant: INPUT_VARIANT.DEFAULT
  }
};

export default meta;
