import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProgressState from './context/Progress/ProgressState';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <React.StrictMode>
    <BrowserRouter>
    <ProgressState>
    <App />
    </ProgressState>
    </BrowserRouter>
  </React.StrictMode>
);
