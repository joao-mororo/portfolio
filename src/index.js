import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextsProvider from './components/ContextsProvider';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextsProvider>
      <App />
    </ContextsProvider>
  </React.StrictMode>
);
