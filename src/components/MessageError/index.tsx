import { useState } from 'react';

// components
import Modal from 'components/common/Modal';

// style
import './index.css';

const MsgErrBoundary: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={'Error'}>
      <div className='flex-container error-fallback-container'>
        <h2 className='error-fallback-title'>Oops! Something went wrong</h2>
        <p className='error-fallback-description'>
          We&apos;re sorry, but an error occurred while processing your request.
        </p>
        <a href='/' className='back-home'>
          Back to home page
        </a>
      </div>
    </Modal>
  );
};

export default MsgErrBoundary;
