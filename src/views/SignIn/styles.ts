import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerLinkToGo = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const LinkToGo = styled(Link)`
  font-size: ${(props) => props.theme.general.fontSizes[0]};
  margin-bottom: ${(props) => props.theme.general.space[5]};
`;
