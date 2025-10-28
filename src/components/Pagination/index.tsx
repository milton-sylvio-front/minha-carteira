import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';

import { UiBox, UiButton, UiFlex } from '@/components/UI';

import { formatNumberPage } from '@/helpers/utils';

import type { IPagination } from './types';

export const Pagination = ({
  totalItems,
  pageSize,
  description,
}: IPagination) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('pagina')) || 1;
  const isLastPage = page * pageSize >= totalItems;
  const totalPages = Math.ceil(totalItems / pageSize);

  const setPage = (p: number) => setSearchParams({ pagina: String(p + 1) });
  const nextPage = () => setSearchParams({ pagina: String(page + 1) });
  const previousPage = () =>
    page > 1 && setSearchParams({ pagina: String(page - 1) });

  return (
    <UiFlex
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={4}
      mt={2}
    >
      <small>
        Total de {description}: {totalItems}
      </small>

      <UiBox display="flex" gridGap={2}>
        <UiButton
          disabled={page <= 1}
          leftIcon={<MdArrowBackIos />}
          onClick={previousPage}
          size="sm"
          title="Anterior"
        >
          Anterior
        </UiButton>

        {new Array(totalPages).fill(null).map((items, idx) => (
          <UiButton
            disabled={page === formatNumberPage(idx)}
            key={items + idx}
            onClick={() => setPage(idx)}
            size="sm"
            title={`Página ${formatNumberPage(idx)}`}
            variant={page === formatNumberPage(idx) ? 'primary' : 'outline'}
          >
            {formatNumberPage(idx)}
          </UiButton>
        ))}

        <UiButton
          disabled={isLastPage}
          onClick={nextPage}
          rightIcon={<MdArrowForwardIos />}
          size="sm"
          title="Próxima"
        >
          Próxima
        </UiButton>
      </UiBox>
    </UiFlex>
  );
};
