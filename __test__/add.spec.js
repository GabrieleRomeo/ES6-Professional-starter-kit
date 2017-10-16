/* global test expect */
import { add } from '../src/add';

test('Adds 10 + 10 to equal 20', () => {
  expect(add(10, 10)).toBe(20);
});
