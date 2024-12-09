import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface ITypeAlert {
  type: 'info' | 'success' | 'error' | 'warning';
}

export interface IAlert extends BorderProps, ITypeAlert, SpaceProps {
  closeBtn?: boolean;
  message?: string;
}

export interface IAlertContainer
  extends ITypeAlert,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {}
