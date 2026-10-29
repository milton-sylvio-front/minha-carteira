export const clearFormatValue = (value: number | string) => {
  const normalized = value
    .toString()
    .replace(/\u00a0/g, ' ')
    .replace(/R\$\s?/g, '')
    .trim()
    .replace(/\./g, '')
    .replace(',', '.');

  return Number(normalized);
};

export const toCurrencyMask = (value: number) => {
  const formatted = Number(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `R$ ${formatted}`;
};
