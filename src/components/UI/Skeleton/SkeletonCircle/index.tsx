import { SkeletonCircle } from './styles';
import type { ISkeletonCircle } from './types';

export const UiSkeletonCircle = ({
  size = '20px',
  variant = 'shine',
}: ISkeletonCircle) => <SkeletonCircle size={size} variant={variant} />;
