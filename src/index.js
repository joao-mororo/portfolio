import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollProvider from './contexts/scroll';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>
);
