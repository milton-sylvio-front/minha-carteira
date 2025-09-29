import { useMenuMobile } from '@/hooks/menu';

import { Container, Overlay } from './styles';
import type { IContent } from './types';

export const Content = ({ children }: IContent) => {
  const { toggleMenu } = useMenuMobile();

  return (
    <Container>
      {children}
      <Overlay className={toggleMenu ? 'overlay' : ''} />
    </Container>
  );
};
