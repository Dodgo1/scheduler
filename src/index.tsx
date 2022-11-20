import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {MainNav} from "./components/nav";





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <MainNav />
);

