import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Routing from './PAGES/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>
);

