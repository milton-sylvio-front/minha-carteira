import ImageEmptyData from '@/assets/images/empty-data.svg?react';
import { UiFlex } from '@/components/UI';

import { Description, Title } from './styles';
import type React from 'react';

export interface IProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const EmptyData = ({ children, description, title }: IProps) => (
  <UiFlex
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    height="70vh"
  >
    <ImageEmptyData />
    <Title>{title}</Title>
    {description && <Description>{description}</Description>}
    {children}
  </UiFlex>
);
