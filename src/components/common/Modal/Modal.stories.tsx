import { StoryObj, Meta } from '@storybook/react';

// components
import Modal from 'components/common/Modal';

const meta: Meta<typeof Modal> = {
  component: Modal
};

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    onClose: () => {},
    children: 'Modal Content'
  }
};

export default meta;
