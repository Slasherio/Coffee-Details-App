export const minPrice = pricingArray => {
  let min = parseFloat(pricingArray[0].price);
  pricingArray.forEach(element => {
    const value = parseFloat(element.price);
    if (value < min) {
      min = value;
    }
  });
  return min;
};
