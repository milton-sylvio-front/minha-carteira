import { Container, Controllers, TitleHeader } from './styles';
import { IContentHeader } from './types';

const ContentHeader = ({ title, children }: IContentHeader) => (
  <Container className="content-header">
    <TitleHeader>{title}</TitleHeader>

    <Controllers>{children}</Controllers>
  </Container>
);

export default ContentHeader;
