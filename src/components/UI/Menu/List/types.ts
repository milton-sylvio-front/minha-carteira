import type {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export interface IMenuListStyles
  extends FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export interface IUiMenuList extends IMenuListStyles {
  children: React.ReactNode;
  isOpen: boolean;
}
