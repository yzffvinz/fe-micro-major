const { Compose, Pipe } = require('./compose');

const add = x => x + 1;
const multiply = x => x * 5;
const minus = x => x - 5;
const divide = x => x / 2;

const com = Compose(add, multiply, minus, divide);
const pip = Pipe(add, multiply, minus, divide);

test('compose 测试', () => {
  expect(com(2)).toBe(-19);
});

test('pipe 测试', () => {
  expect(pip(2)).toBe(-5);
});
