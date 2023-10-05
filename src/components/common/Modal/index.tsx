import { ReactElement, memo } from 'react';

// components
import CloseButton from 'components/common/CloseButton';

// styles
import './index.css';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

//TODO: handle dismiss when touching on overlay
const Modal = ({ onClose, children }: Props): ReactElement => (
  <div className="modal-overlay" data-testid="modal-overlay">
    <div className="modal-content" data-testid="modal-content">
      <div className="modal-header" data-testid="modal-header">
        <CloseButton onClick={onClose} />
      </div>
      <div className="modal-body" data-testid="modal-body">
        {children}
      </div>
    </div>
  </div>
);

export default memo(Modal);
