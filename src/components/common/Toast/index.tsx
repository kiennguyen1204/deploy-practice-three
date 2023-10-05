import { ReactElement, memo, useEffect } from 'react';

// constants
import { STATUS } from 'constants/enums';

// styles
import './index.css';

interface Props {
  status: string;
  message: string;
  onClose: () => void;
  timeout?: number;
}

const Toast = ({ status, message, onClose, timeout = 2000 }: Props): ReactElement => {
  const toastStatus = status === STATUS.SUCCESS ? 'success' : 'error';
  const toastProcess = status === STATUS.SUCCESS ? 'done' : 'warning';

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onClose]);

  return (
    <div className={`toast ${toastStatus}`}>
      <div className="notification">
        <span className={`material-symbols-outlined ${toastProcess}`}></span>
        <div className="message">
          <p className="content">{message}</p>
        </div>
        <button onClick={onClose} type="button" className="btn-close" aria-label="Close">
          X
        </button>
      </div>
    </div>
  );
};

export default memo(Toast);
