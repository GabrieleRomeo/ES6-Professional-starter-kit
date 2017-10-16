/**
 * Sums two numbers
 * @author You
 * @param      {Number} x  The first addend
 * @param      {Number} y  The second addend
 * @return     {Number} The result of the sum
 * @signature add :: (Number, Number) -> Number
 * @example
 * // It returns 10
 * add(5, 5);
 * @example <caption>With nested functions</caption>
 * // It returns 20
 * add(add(5, 5), add(5, 5));
 */
const add = (x, y) => x + y;

export default add;
