import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import type { ICurrencyInput } from './types';

import { DEFAULT_MASK_OPTIONS } from './constants';

export const CurrencyInput = ({
  typeInput = 'text',
  maskOptions,
  className,
  ...inputProps
}: ICurrencyInput) => {
  const currencyMask = createNumberMask({
    ...DEFAULT_MASK_OPTIONS,
    ...maskOptions,
  });

  return (
    <MaskedInput
      className={className}
      mask={currencyMask}
      type={typeInput}
      {...inputProps}
    />
  );
};
