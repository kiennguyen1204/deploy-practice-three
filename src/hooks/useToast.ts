import { useState } from 'react';

interface ToastType {
  status: string;
  message: string;
  openPopup: boolean;
}

const useToast = () => {
  const [toast, setToast] = useState<ToastType>({
    status: '',
    message: '',
    openPopup: false
  });

  const showToast = (status: string, message: string) => {
    setToast({
      status,
      message,
      openPopup: true
    });
  };

  const hideToast = () => {
    setToast({
      status: '',
      message: '',
      openPopup: false
    });
  };

  return {
    toast,
    showToast,
    hideToast
  };
};

export { useToast };
