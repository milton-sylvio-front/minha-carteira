import type { MouseEventHandler } from 'react';

export interface IModalHeaderProps {
  children?: React.ReactNode;
  onClickClose: MouseEventHandler | undefined;
}
