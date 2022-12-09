const mathOperators = require("./index");

test("properly adds two numbers", () => {
  expect(mathOperators.sum(1, 2)).toBe(3);
});

test("properly subtracts two numbers", () => {
  expect(mathOperators.diff(5, 3)).toBe(2);
});

test("properly multiply two numbers", () => {
  expect(mathOperators.product(5, 4)).toBe(20);
});
