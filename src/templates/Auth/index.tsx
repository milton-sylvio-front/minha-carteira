import Logo from '../../components/Logo';

import { Container, ContainerSignin, ContainerForm } from './styles';

import { IAuthTemplate } from './types';

const AuthTemplate = ({ children }: IAuthTemplate) => (
  <Container>
    <ContainerSignin>
      <Logo />

      <ContainerForm>{children}</ContainerForm>
    </ContainerSignin>
  </Container>
);

export default AuthTemplate;
