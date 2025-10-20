import type { IInputProps } from '@/components/UI/Input/types';

export interface ICurrencyInput extends IInputProps {
  maskOptions?: {
    prefix: string;
    suffix: string;
    includeThousandsSeparator: boolean;
    thousandsSeparatorSymbol: string;
    allowDecimal: boolean;
    decimalSymbol: string;
    decimalLimit: string;
    requireDecimal: boolean;
    allowNegative: boolean;
    allowLeadingZeroes: boolean;
    integerLimit: number;
  };
  typeInput?: string;
  className?: string;
}
