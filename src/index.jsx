import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import '../assets/stylesheets/style.scss';

import App from './components/App';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
