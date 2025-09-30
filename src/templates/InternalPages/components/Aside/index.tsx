import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  MdArrowDownward,
  MdArrowUpward,
  MdArticle,
  MdDashboard,
  MdNoteAdd,
  MdOutlineWbSunny,
} from 'react-icons/md';
import { FiMoon } from 'react-icons/fi';

import { PATHS } from '@/helpers/configs/paths';

import Logo from '@/components/Logo';
import { UiBox, UiButtonGroup, UiFlex, UiRadioButton } from '@/components/UI';

import { useMenuMobile } from '@/hooks/menu';
import { useTheme } from '@/hooks/theme';
import {
  auth,
  collection,
  db,
  query,
  getDocs,
  where,
} from '@/helpers/utils/firebase';

import {
  Avatar,
  Container,
  Header,
  MenuContainer,
  MenuItem,
  Profile,
  UserName,
  UserEmail,
} from './styles';

import { getFirstAndLastLettersOfName } from './utils';

import { MenuProfile } from './components/MenuProfile';

const { DASHBOARD, ENTRY, NEW_REGISTER, OUTPUT, TRANSACTIONS } = PATHS;

export const Aside = () => {
  const { toggleMenu } = useMenuMobile();
  const [user, loading] = useAuthState(auth);
  const { toggleTheme, theme } = useTheme();

  const [name, setName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [getTheme, setTheme] = useState<string>(
    theme.mode === 'dark' ? 'dark' : 'light'
  );

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
    {
      path: TRANSACTIONS.url,
      text: TRANSACTIONS.title,
      icon: <MdArticle />,
    },
  ];

  useEffect(() => {
    if (loading) return;

    const fetchUserName = async () => {
      try {
        const usersRef = collection(db, 'Users');
        const q = query(usersRef, where('uid', '==', user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setEmail(data.email);
        setFullName(data.name);
        const fullname = data.name.split(' ');
        setName(fullname[0]);
      } catch (err) {
        console.error(err);
        alert('Erro ao acessar os dados do usuário!');
      }
    };

    fetchUserName();
  }, [loading, user?.uid]);

  const handleChangeTheme = () => {
    setTheme(getTheme);
    toggleTheme();
  };

  const themeOptions = [
    { label: 'Escuro', value: 'dark', icon: <FiMoon /> },
    { label: 'Claro', value: 'light', icon: <MdOutlineWbSunny /> },
  ];

  const lettersOfName = getFirstAndLastLettersOfName(fullName);

  return (
    <Container menuIsOpen={toggleMenu}>
      <section>
        <Header>
          <Logo />
        </Header>

        <MenuContainer>
          {menu.map((item) => (
            <MenuItem
              key={item.path}
              to={item.path}
              className={
                window.location.pathname === item.path ? 'actived' : ''
              }
              title={item.text}
            >
              {item.icon}
              {item.text}
            </MenuItem>
          ))}
        </MenuContainer>
      </section>

      <UiFlex flexDirection="column" justifyContent="center">
        <UiButtonGroup
          className="btn-group-toggle"
          role="group"
          aria-label="Basic outlined example"
        >
          <UiRadioButton
            name="myRadioGroup"
            options={themeOptions}
            selectedValue={getTheme}
            onChange={handleChangeTheme}
          />
        </UiButtonGroup>

        <Profile>
          <Avatar>{lettersOfName}</Avatar>

          <UiBox>
            <UiBox
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              position="relative"
            >
              <UserName>{name}</UserName>
              <MenuProfile />
            </UiBox>

            <UserEmail title={email}>{email}</UserEmail>
          </UiBox>
        </Profile>
      </UiFlex>
    </Container>
  );
};
