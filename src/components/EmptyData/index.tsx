import Image from '@/assets/images/empty-data.svg?react';
import { UiFlex } from '@/components/UI';

import { Description, Title } from './styles';

export const EmptyData = () => (
  <UiFlex alignItems="center" flexDirection="column" justifyContent="center">
    <Image />
    <Title>Ainda não existem transações</Title>
    <Description>
      Cadastre ao menos uma transação para visualizar os dados
    </Description>
  </UiFlex>
);
