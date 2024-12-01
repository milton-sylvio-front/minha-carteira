import { Skeleton } from './styles';
import type { ISkeleton } from './types';

export const UiSkeleton = ({
  height = '10px',
  width = '100%',
  variant = 'shine',
}: ISkeleton) => <Skeleton height={height} variant={variant} width={width} />;
