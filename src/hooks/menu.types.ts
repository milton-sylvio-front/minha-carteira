import { ReactNode } from 'react';

export interface IMenuMobile {
  toggleMenu: boolean;
  handleToggleMenu(): void;
}

export interface IMenuMobileProvider {
  children: ReactNode;
}
