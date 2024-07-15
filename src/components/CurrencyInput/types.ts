export interface ICurrencyInput {
  maskOptions?: {
    prefix: string
    suffix: string
    includeThousandsSeparator: boolean
    thousandsSeparatorSymbol: string
    allowDecimal: boolean
    decimalSymbol: string
    decimalLimit: string
    requireDecimal: boolean
    allowNegative: boolean
    allowLeadingZeroes: boolean
    integerLimit: number
  }
  typeInput?: string
}
