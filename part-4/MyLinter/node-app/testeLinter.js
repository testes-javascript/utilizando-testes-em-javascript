const a = 1;
const b = 2;

let count = 1;

// eslint-disable-next-line no-constant-condition
if (true) {
  count += 1;
}

const item = {};

console.log(count);
console.log(item);
console.log(a, b);
