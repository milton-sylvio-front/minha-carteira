import { useMenuMobile } from '../../hooks/Menu/useMenuMobile';

import { Container, Overlay } from './styles';
import { IContent } from './types';

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
