export const averagePrice = pricingArray => {
  let sum = pricingArray.reduce((acc, obj) => {
    return acc + parseFloat(obj.price);
  }, 0);
  let average = sum / pricingArray.length;
  return parseFloat(average).toFixed(2);
};
