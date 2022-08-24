import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import NavRoutes from './routes/NavRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <NavRoutes/>
  //</React.StrictMode>
);


