import { createContext } from 'react';

import { IMenuMobile } from './menu.types';

export const MenuMobileContext = createContext<IMenuMobile>({} as IMenuMobile);
