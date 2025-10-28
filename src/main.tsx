import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@/styles/theme';
import { MenuMobileProvider } from '@/hooks/menuProvider';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuMobileProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MenuMobileProvider>
  </React.StrictMode>
);
