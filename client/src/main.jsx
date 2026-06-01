import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/lpl-base.css';
import './styles/lpl-admin.css';
import './styles/app-shell.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
