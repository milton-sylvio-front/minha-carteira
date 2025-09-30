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
  UiBox,
  UiDivider,
  UiIconButton,
  UiMenuItem,
  UiMenuList,
} from '@/components/UI';

const { SIGN_IN } = PATHS;

export const MenuProfile = () => {
  const navigate = useNavigate();
  const [toggleMenuProfile, setToggleMenuProfile] = useState<boolean>(false);

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
    <UiBox>
      <UiIconButton
        aria-label="Menu do perfil"
        onClick={handlerMenuProfile}
        isRound
        icon={<MdMoreVert />}
      />

      <UiMenuList
        bottom="100%"
        isOpen={toggleMenuProfile}
        left="150px"
        marginBottom="-32px"
        // onClose={() => handlerMenuClick(false)}
      >
        <UiMenuItem icon={<MdPersonOutline />} title="Meu Perfil">
          Meu perfil
        </UiMenuItem>
        <UiMenuItem icon={<MdSettingsSuggest />} title="Configurações">
          Configurações
        </UiMenuItem>
        <UiDivider />
        <UiMenuItem icon={<MdExitToApp />} onClick={handleSignOut} title="Sair">
          Sair
        </UiMenuItem>
      </UiMenuList>
    </UiBox>
  );
};
