import type {
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export type IBadgeColorTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

export type IBadgeSizes = 'sm' | 'md' | 'lg';

export type IBadgeVariants = 'solid' | 'outline' | 'ghost';

export interface IUiBadge
  extends FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps {}

export interface IUiBadgeProps extends IUiBadge {
  colorType?: IBadgeColorTypes;
  size?: IBadgeSizes;
  rounded?: boolean;
  variantion?: IBadgeVariants;
  children: React.ReactNode;
}
