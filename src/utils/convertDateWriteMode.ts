export function convertDateWriteMode(date: Date) {
  const formatedDate = new Date(date);
  const month = setFormatMonth(Number(formatedDate.getMonth()));

  return `${formatedDate.getDate()} de ${month} de ${formatedDate.getFullYear()}`;
}

function setFormatMonth(month: number): string {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  return months[month];
}
