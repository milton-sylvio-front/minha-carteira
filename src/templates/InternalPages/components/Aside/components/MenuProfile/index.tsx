import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdExitToApp,
  MdMoreVert,
  MdPersonOutline,
  MdSettingsSuggest,
} from 'react-icons/md';

import { auth, signOut } from '@/helpers/utils/firebase';
import { PATHS } from '@/helpers/configs/paths';
import {
  UiDivider,
  UiIconButton,
  UiMenu,
  UiMenuButton,
  UiMenuItem,
  UiMenuList,
} from '@/components/UI';
import type { IMenuButtonPositionMenu } from '@/components/UI/Menu/Button/types';

const { SIGN_IN } = PATHS;

export const MenuProfile = () => {
  const navigate = useNavigate();
  const [toggleMenuProfile, setToggleMenuProfile] = useState<boolean>(false);
  const [positionMenu, setPositionMenu] =
    useState<IMenuButtonPositionMenu>('top');

  const handlerMenuProfile = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setToggleMenuProfile(!toggleMenuProfile);
  };

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

  return (
    <UiMenu>
      <UiMenuButton
        aria-label="Menu do perfil"
        as={UiIconButton}
        onTogglePosition={() => setPositionMenu(positionMenu)}
        onClick={handlerMenuProfile}
        icon={<MdMoreVert />}
        variant="ghost"
      />

      <UiMenuList isOpen={toggleMenuProfile} positionMenu={positionMenu}>
        <UiMenuItem icon={<MdPersonOutline />} size="sm" title="Meu Perfil">
          Meu perfil
        </UiMenuItem>
        <UiMenuItem
          icon={<MdSettingsSuggest />}
          size="sm"
          title="Configurações"
        >
          Configurações
        </UiMenuItem>
        <UiDivider />
        <UiMenuItem
          icon={<MdExitToApp />}
          size="sm"
          onClick={handleSignOut}
          title="Sair"
        >
          Sair
        </UiMenuItem>
      </UiMenuList>
    </UiMenu>
  );
};
