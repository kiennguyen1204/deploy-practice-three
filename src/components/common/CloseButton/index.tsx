import { ReactElement } from 'react';

interface Props {
  onClick: () => void;
}

const CloseButton: React.FC<Props> = ({ onClick }): ReactElement => (
  <button
    className='modal-close-button'
    onClick={onClick}
    type='button'
    data-testid='modal-close-button'>
    &times;
  </button>
);

export default CloseButton;
