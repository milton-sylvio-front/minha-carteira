import { VStack } from './styles';
import type { IVStack } from './types';

export const UiVStack = ({ children, gap = '5px' }: IVStack) => (
  <VStack gap={gap}>{children}</VStack>
);
