import { useMemo, useState, useEffect } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';

import emojiList from '../../helpers/utils/emojis';
import {
  auth,
  collection,
  db,
  query,
  getDocs,
  where,
} from '../../helpers/utils/firebase';

import { useTheme } from '../../hooks/theme';
import { useMenuMobile } from '../../hooks/Menu/useMenuMobile';

import Logo from '../../components/Logo';

import {
  Container,
  Profile,
  Welcome,
  UserName,
  Emojis,
  MenuMobile,
  Toggle,
  ContainerActionsMobile,
} from './styles';

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const [name, seName] = useState<string>('');

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojiList.length);
    return emojiList[index];
  }, []);

  const { handleToggleMenu, toggleMenu } = useMenuMobile();

  const { toggleTheme, theme } = useTheme();
  const [getTheme, setTheme] = useState(() => theme.mode === 'dark');

  const handleChangeTheme = () => {
    setTheme(!getTheme);
    toggleTheme();
  };

  useEffect(() => {
    if (loading) return;

    const fetchUserName = async () => {
      try {
        const usersRef = collection(db, 'Users');
        const q = query(usersRef, where('uid', '==', user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        const fullname = data.name.split(' ');
        seName(fullname[0]);
      } catch (err) {
        console.error(err);
        alert('Erro ao acessar os dados do usuário!');
      }
    };

    fetchUserName();
  }, [loading, user?.uid]);

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

      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={getTheme}
        className="header"
        onChange={handleChangeTheme}
      />

      <Profile>
        <Emojis>{emoji}</Emojis>

        <Welcome>
          Olá,
          <UserName>{name}</UserName>
        </Welcome>
      </Profile>
    </Container>
  );
};

export default Header;
