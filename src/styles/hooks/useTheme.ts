import { useContext } from 'react';

import { ThemeContext } from '../theme';
import type { IThemeContext } from '../theme.types';

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}
