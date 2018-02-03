const style = require('./');

test('it works', () => {
  expect(style('bold')).toBe('\x1b[1m');
  expect(style(['red', 'green'])).toBe('\x1b[31;32m');
});
