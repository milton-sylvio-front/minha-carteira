import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { ThemeProvider } from '@/hooks/theme';
import { MenuMobileProvider } from '@/hooks/menuProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuMobileProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MenuMobileProvider>
  </React.StrictMode>
);
