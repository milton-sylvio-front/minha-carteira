import { createContext } from 'react';

import type { IMenuMobile } from './menu.types';

export const MenuMobileContext = createContext<IMenuMobile>({} as IMenuMobile);
