export const CheckPriceColor = (currentPrice: number) => {
  let isNegative = Math.sign(currentPrice);

  return {
    isNegative: currentPrice === 0 ? 1 : isNegative,
    Value: Math.abs(currentPrice),
  };
};
