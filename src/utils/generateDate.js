export const generateDates = data => {
  return `${data[0].week} - ${data[data.length - 1].week}`;
};
