import symbolLogo from '../../assets/logo.svg';

import { Container } from './styles';

const Logo = () => (
  <Container className="logo">
    <img src={symbolLogo} alt="Minha Carteira" />

    <span>
      Minha <strong>Carteira</strong>
    </span>
  </Container>
);

export default Logo;
