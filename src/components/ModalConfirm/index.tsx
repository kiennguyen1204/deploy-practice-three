import { memo } from 'react';

// components
import Modal, { Props } from 'components/common/Modal';

// styles
import './index.css';

export interface ModalProps extends Props {
  onConfirm: () => void;
  onCancel?: () => void;
}

const ConfirmModal: React.FC<ModalProps> = ({ isOpen, onClose, title, onCancel, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div>
        <div className='modal-body text-danger'>Are you sure delete this product?</div>
        <div className='modal-footer'>
          <button className='modal-confirm-button' onClick={onConfirm} type='button'>
            Confirm
          </button>
          <button className='modal-cancel-button' onClick={onCancel} type='button'>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default memo(ConfirmModal);
