import type {
  BorderProps,
  BackgroundProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
} from 'styled-system';

export interface IBox
  extends BorderProps,
    BackgroundProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}

export interface IUiBox extends IBox {
  children?: React.ReactNode;
}
