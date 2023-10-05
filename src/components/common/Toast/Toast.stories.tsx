import { StoryObj, Meta } from '@storybook/react';

// components
import Toast from 'components/common/Toast';

export default {
  title: 'Components/Toast',
  component: Toast
} as Meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    status: 'success',
    message: 'Success message',
    onClose: () => {}
  }
};

export const Error: Story = {
  args: {
    status: 'error',
    message: 'Error message',
    onClose: () => {}
  }
};
