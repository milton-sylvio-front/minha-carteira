export const formatCurrency = (current: number) => {
  return current.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};
