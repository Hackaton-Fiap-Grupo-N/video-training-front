import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesManager from './Routes/RoutesManager';
import MuiThemes from './Utils/Common/MuiThemes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MuiThemes>
        <RoutesManager />
      </MuiThemes>
    </BrowserRouter>
  </React.StrictMode>
);
