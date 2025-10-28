import { createContext, useState } from 'react';

import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';

import { CONFIGS } from '@/helpers/utils';

import type { IThemeContext, IThemeProvider, ThemeProps } from './theme.types';

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<ThemeProps>(() => {
    const savedTheme = localStorage.getItem(CONFIGS.minhaCarteira);

    if (savedTheme) {
      return JSON.parse(savedTheme);
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    const themeMode = theme.mode === 'dark' ? light : dark;
    setTheme(themeMode);
    localStorage.setItem(CONFIGS.minhaCarteira, JSON.stringify(themeMode));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
