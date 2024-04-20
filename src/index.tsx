import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
if (!root) {
  throw new Error("Root element with id 'root' not found in the document");
}

// Use ReactDOM.render instead of createRoot if you're not using concurrent mode
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();