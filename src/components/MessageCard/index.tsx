import { Container } from './styles';

interface IMessageCard {
  title: string;
  description: string;
  footerTxt: string;
  icon: string;
}

const MessageCard = ({ title, description, footerTxt, icon }: IMessageCard) => (
  <Container>
    <header>
      <h2>
        {title}
        <img src={icon} alt="" />
      </h2>
      <h3>{description}</h3>
    </header>
    <footer>
      <small>{footerTxt}</small>
    </footer>
  </Container>
);

export default MessageCard;
