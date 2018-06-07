export const maxPrice = pricingArray => {
  let max = parseFloat(pricingArray[0].price);
  pricingArray.forEach(element => {
    const value = parseFloat(element.price);
    if (value > max) {
      max = value;
    }
  });
  return max;
};
