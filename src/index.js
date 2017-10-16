import add from './add';

const obj = {
  a: 1,
  b: 2,
};

console.log('Using the spread operator', { ...obj });
console.log('The result is', add(add(2, 3), 10));
