const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking name...');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff')
  })

  test('User is Anna', () => {
    const user = 'Anna';
    expect(user).toBe('Anna');
  });
});

//////////////////////////////////////////////////
// Basics

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// to be null
test('Should be null', () => {
  expect(functions.isNull()).toBe(null);
});

// to be falsey
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// to equal (objects, arrays)
test('User should be Jane Moroz object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Jane',
    lastName: 'Moroz',
  });
});

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'anna', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

//////////////////////////////////////////////////
// Working with async data

// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1); // assertion !!!
//   return functions.fetchUser().then(data => {
//     // return !!!
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
