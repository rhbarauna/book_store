const formatMoney = (price) => {
  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return moneyFormatter.format(price);
}

export {
  formatMoney
}