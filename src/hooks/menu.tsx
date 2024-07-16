import { useContext } from 'react';

import { MenuMobileContext } from './menuContext';
import { IMenuMobile } from './menu.types';

export const useMenuMobile = (): IMenuMobile => useContext(MenuMobileContext);
