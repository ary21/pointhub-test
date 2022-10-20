export const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};