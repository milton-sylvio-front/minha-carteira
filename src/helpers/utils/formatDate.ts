const formatDate = (date: string): string => {
  const dateFormatted = new Date(date);

  return new Intl.DateTimeFormat('pt-BR').format(dateFormatted);
};

export default formatDate;
