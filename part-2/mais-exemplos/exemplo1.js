const chai = require('chai'),
  expect = chai.expect;

let Calculator = (type) => {
    
    const types = ["Sum"];

    if (types.indexOf(type)) {
        throw new Error(`type: ${type} is not acceptable in calculator!`);
    }
    return (sum1, sum2) => {
        return sum1+sum2;
    }
}

let sum = Calculator("Sum");

expect(sum).to.not.throw();

expect(sum(1,1)).to.equal(2); // Recomendado
expect(sum(1,1)).to.not.equal(1); // Não recomendado