export const getFormattedAmount = (amount: number): string => {
  if (amount < -999) {
    return (amount / 1000).toFixed(1) + 'k';
  }

  if (amount > 999) {
    return (amount / 1000).toFixed(1) + 'k';
  }

  return amount.toString();
};
