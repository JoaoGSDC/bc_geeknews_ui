export function convertDateWriteMode(date: Date) {
  const formatedDate = new Intl.DateTimeFormat('pt-br').format(date);
  const dateSeparate = formatedDate.split('-');

  const month = setFormatMonth(Number(dateSeparate[1]));

  return `${dateSeparate[2]} de ${month} de ${dateSeparate[0]}`;
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

  return months[month - 1];
}
