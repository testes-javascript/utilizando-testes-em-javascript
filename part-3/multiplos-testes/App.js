const Calculator = type => {
  let typeCalculator;

  switch (type) {
    case 'Sum':
      typeCalculator = (sum1, sum2) => {
        return sum1 + sum2;
      };
      break;
    case 'Sub':
      typeCalculator = (sum1, sum2) => {
        return sum1 - sum2;
      };
      break;
    case 'Div':
      typeCalculator = (sum1, sum2) => {
        return sum1 / sum2;
      };
      break;
    case 'Mul':
      typeCalculator = (sum1, sum2) => {
        return sum1 * sum2;
      };
      break;
  }
  return typeCalculator;
};

module.exports = Calculator;
