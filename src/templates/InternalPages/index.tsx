import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Content from '../../components/Content';

import { IInternalPagesTemplate } from './types';
import { Grid } from './styles';

const InternalPagesTemplate = ({ children }: IInternalPagesTemplate) => (
  <Grid>
    <Header />
    <Aside />
    <Content>{children}</Content>
  </Grid>
);

export default InternalPagesTemplate;
