import { MdMenu, MdClose } from 'react-icons/md';

import { useMenuMobile } from '@/hooks/menu';
import Logo from '@/components/Logo';

import { Container, MenuMobile, ContainerActionsMobile } from './styles';

const Header = () => {
  const { handleToggleMenu, toggleMenu } = useMenuMobile();

  return (
    <Container>
      <ContainerActionsMobile>
        <Logo />

        <MenuMobile
          onClick={handleToggleMenu}
          className={toggleMenu ? 'open' : ''}
          type="button"
        >
          {toggleMenu ? (
            <MdClose className="icon-close" />
          ) : (
            <MdMenu className="icon-menu" />
          )}
        </MenuMobile>
      </ContainerActionsMobile>
    </Container>
  );
};

export default Header;
