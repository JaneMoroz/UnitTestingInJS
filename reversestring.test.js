const reverseString = require('./reversestring');

// Check if function exists
test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});
