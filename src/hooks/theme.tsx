import { createContext, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import strings from '../helpers/utils/strings';

import type { IThemeContext, IThemeProvider, ThemeProps } from './theme.types';

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<ThemeProps>(() => {
    const savedTheme = localStorage.getItem(strings.minhaCarteira);

    if (savedTheme) {
      return JSON.parse(savedTheme);
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    const themeMode = theme.mode === 'dark' ? light : dark;
    setTheme(themeMode);
    localStorage.setItem(strings.minhaCarteira, JSON.stringify(themeMode));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { useTheme };
