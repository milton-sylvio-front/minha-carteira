import { useMenuMobile } from '../../hooks/menu';

import { Container, Overlay } from './styles';
import type { IContent } from './types';

const Content = ({ children }: IContent) => {
  const { toggleMenu } = useMenuMobile();

  return (
    <Container>
      {children}
      <Overlay className={toggleMenu ? 'overlay' : ''} />
    </Container>
  );
};

export default Content;
