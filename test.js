const orderCheck = require('./orderCheck')

test('the function exists', () => {
  expect(typeof orderCheck).toEqual('function')
});

test('returns true if the orders are in order', () => {
  expect(orderCheck([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2])).toEqual(true)
})

test('returns false if they are not in order', () => {
  expect(orderCheck([1, 3, 5],[2, 4, 6],[1, 2, 4, 6, 5, 3])).toEqual(false);
})
