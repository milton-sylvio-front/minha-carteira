import { createContext, ReactNode, useState, useContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import strings from '../helpers/utils/strings';

interface IThemeContext {
  toggleTheme(): void;
  theme: ThemeProps;
}

interface ThemeProps {
  mode: string;
  general: {
    bordersRadius: {
      small: string;
      normal: string;
      large: string;
      rounded: string;
    };
    colors: {
      black: string;
      white: string;
      gray: string[];
      blue: string[];
      primary: string;
      secondary: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
    };
    fontSizes: string[];
    fontWeights: {
      normal: number;
      bold: number;
    };
    lineHeights: {
      condensedUltra: number;
      condensed: number;
      default: number;
    };
    space: string[];
    sizes: {
      large: string;
      medium: string;
      small: string;
    };
  };
  backoundColor: string;
  textColor: string;
  card: string;
  scrollbar: {
    thumb: string;
    track: string;
  };
  dropdown: string;
  aside: string;
  header: string;
  input: {
    borderColor: string;
    bg: string;
    color: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

interface IThemeProvider {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {
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

export { ThemeProvider, useTheme };
