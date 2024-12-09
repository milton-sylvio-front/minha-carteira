import { useState } from 'react';

import type { IMenuMobileProvider } from './menu.types';
import { MenuMobileContext } from './menuContext';

export const MenuMobileProvider = ({ children }: IMenuMobileProvider) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <MenuMobileContext.Provider value={{ toggleMenu, handleToggleMenu }}>
      {children}
    </MenuMobileContext.Provider>
  );
};
