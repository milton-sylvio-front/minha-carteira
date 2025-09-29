import type { HTMLAttributes } from 'react';

import type {
  BorderProps,
  BackgroundProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
} from 'styled-system';

export interface IMenuItemStyles
  extends BorderProps,
    BackgroundProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}

export interface IUiMenuItem
  extends IMenuItemStyles,
    HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  icon?: React.ReactElement;
}
