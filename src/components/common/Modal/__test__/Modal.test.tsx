import { render, screen, fireEvent } from '@testing-library/react';

// components
import Modal from 'components/common/Modal';

//TODO: write test case for dismiss when touching on overlay
describe('Modal component', () => {
  it('renders the modal with children', () => {
    const onClose = jest.fn();

    // Render the Modal component with some children
    render(
      <Modal onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );

    // Check if the modal overlay is in the document
    const modalOverlay = screen.getByTestId('modal-overlay');
    expect(modalOverlay).toBeInTheDocument();

    // Check if the modal content is in the document
    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toBeInTheDocument();

    // Check if the modal body contains the provided children
    const modalBody = screen.getByTestId('modal-body');
    expect(modalBody).toBeInTheDocument();
    expect(modalBody).toHaveTextContent('Modal Content');

    // Check if the close button is in the document
    const closeButton = screen.getByTestId('modal-close-button');
    expect(closeButton).toBeInTheDocument();

    // Simulate a click on the close button
    fireEvent.click(closeButton);

    // Verify that the onClose function was called
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
