import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// components
import ErrorBoundary from './components/ErrorBoundary';
import MsgErrBoundary from './components/MessageError';

// styles
import './index.css';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<MsgErrBoundary />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
