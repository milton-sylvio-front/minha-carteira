import { SkeletonText } from './styles';
import type { ISkeletonText } from './types';

export const UiSkeletonText = ({
  height = '10px',
  width = '100%',
  rows = 1,
  variant = 'shine',
}: ISkeletonText) =>
  new Array(rows)
    .fill(null)
    .map(() => (
      <SkeletonText height={height} variant={variant} width={width} />
    ));
