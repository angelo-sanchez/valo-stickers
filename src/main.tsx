import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { favsService } from './services/fav-service.ts';
import { stickersService } from './services/stickers-service.ts';

favsService.init();
stickersService.init();

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
