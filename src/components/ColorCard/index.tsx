import CountUp from 'react-countup';

import dollarIcon from '../../assets/icons/dollar.svg';
import arrowDownIcon from '../../assets/icons/arrow-down.svg';
import arrowUpIcon from '../../assets/icons/arrow-up.svg';

import { Container } from './styles';
import type { IColorCard } from './types';

const ColorCard = ({ title, amount, description, icon, color }: IColorCard) => {
  const iconFormated = {
    dollar: dollarIcon,
    arrowDown: arrowDownIcon,
    arrowUp: arrowUpIcon,
  };

  const getIcon = iconFormated[icon];

  return (
    <Container className={color}>
      <span>{title}</span>

      <strong>
        <CountUp
          end={amount}
          duration={2.75}
          prefix="R$ "
          separator="."
          decimals={2}
          decimal=","
        />
      </strong>

      <img src={getIcon} alt={title} />
      <small>{description}</small>
    </Container>
  );
};

export default ColorCard;
