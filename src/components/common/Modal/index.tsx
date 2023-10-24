import { ReactElement, memo } from 'react';

// components
import CloseButton from 'components/common/CloseButton';

// styles
import './index.css';

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title: string;
}

//TODO: handle dismiss when touching on overlay
const Modal = ({ onClose, children }: Props): ReactElement => (
  <article className='modal-overlay' data-testid='modal-overlay'>
    <section className='modal-content' data-testid='modal-content'>
      <div className='modal-header' data-testid='modal-header'>
        <CloseButton onClick={onClose} />
      </div>
      <div className='modal-body' data-testid='modal-body'>
        {children}
      </div>
    </section>
  </article>
);

export default memo(Modal);
