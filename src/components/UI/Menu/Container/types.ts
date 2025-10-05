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

export interface IMenuStyles
  extends BorderProps,
    BackgroundProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}

export interface IUiMenu extends HTMLAttributes<HTMLDivElement>, IMenuStyles {
  children: React.ReactNode;
}
