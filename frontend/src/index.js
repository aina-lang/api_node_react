import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SweetAlertProvider } from './context/sweetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SweetAlertProvider>
      <App />
    </SweetAlertProvider>
  </React.StrictMode>
);


reportWebVitals();
