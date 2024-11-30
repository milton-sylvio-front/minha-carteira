import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdNoteAdd,
} from 'react-icons/md';

import { auth, signOut } from '../../helpers/utils/firebase';
import { PATHS } from '../../helpers/configs/paths';

import Logo from '../../components/Logo';

import { useMenuMobile } from '../../hooks/menu';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  Header,
  MenuContainer,
  MenuItem,
  MenuTitle,
  Toggle,
} from './styles';

const { DASHBOARD, ENTRY, NEW_REGISTER, OUTPUT, SIGN_IN } = PATHS;

const Aside = () => {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useTheme();
  const [getTheme, setTheme] = useState<boolean>(() =>
    theme.mode === 'dark' ? true : false
  );
  const { toggleMenu } = useMenuMobile();

  const menu = [
    {
      path: DASHBOARD.url,
      text: DASHBOARD.title,
      icon: <MdDashboard />,
    },
    {
      path: NEW_REGISTER.url,
      text: NEW_REGISTER.title,
      icon: <MdNoteAdd />,
    },
    {
      path: ENTRY.url,
      text: ENTRY.title,
      icon: <MdArrowUpward />,
    },
    {
      path: OUTPUT.url,
      text: OUTPUT.title,
      icon: <MdArrowDownward />,
    },
  ];

  const handleSignOut = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        navigate(SIGN_IN.url);
      })
      .catch((error) => {
        console.log('Erro ao sair:', error);
      });
  };

  const handleChangeTheme = () => {
    setTheme(!getTheme);
    toggleTheme();
  };

  return (
    <Container menuIsOpen={toggleMenu}>
      <Header>
        <Logo />
      </Header>

      <MenuContainer>
        <MenuTitle>Menu</MenuTitle>

        {menu.map((item) => (
          <MenuItem
            key={item.path}
            to={item.path}
            className={window.location.pathname === item.path ? 'actived' : ''}
            title={item.text}
          >
            {item.icon}
            {item.text}
          </MenuItem>
        ))}

        <MenuItem onClick={handleSignOut} title="Sair" to={''}>
          <MdExitToApp />
          Sair
        </MenuItem>
      </MenuContainer>

      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={getTheme}
        className="header"
        onChange={handleChangeTheme}
      />
    </Container>
  );
};

export default Aside;
