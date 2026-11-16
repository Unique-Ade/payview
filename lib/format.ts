export const formatSalary = (amount: number, currency: string): string => {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    currencyDisplay: "narrowSymbol",
  });
  return currencyFormat.format(amount);
};

export const formatCount = (count: number): string =>
  new Intl.NumberFormat("en-US").format(count);