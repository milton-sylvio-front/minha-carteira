import { Aside } from './components/Aside';
import { Content } from './components/Content';
import { Header } from './components/Header';

import type { IInternalPagesTemplate } from './types';
import { Grid } from './styles';

export const InternalPagesTemplate = ({ children }: IInternalPagesTemplate) => (
  <Grid>
    <Header />
    <Aside />
    <Content>{children}</Content>
  </Grid>
);
