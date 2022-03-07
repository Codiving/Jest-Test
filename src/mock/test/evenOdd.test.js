const isEvenOdd = require("../evenOdd");
const onResult = jest.fn();

it("isEvenOdd mock function test code", () => {
  isEvenOdd(3, onResult);
  isEvenOdd(4, onResult);

  // console.log("# calls", onResult.mock.calls);
  expect(onResult.mock.calls.length).toBe(2);
  expect(onResult.mock.calls[0][0]).toBe("odd");
  expect(onResult.mock.calls[1][0]).toBe("even");
});

it("isEvenOdd mock function test code - simple", () => {
  isEvenOdd(3, onResult);
  isEvenOdd(4, onResult);

  expect(onResult).toHaveBeenCalledTimes(2);
  expect(onResult).toHaveBeenCalledWith("odd");
  expect(onResult).toHaveBeenCalledWith("even");
  expect(onResult).toHaveBeenLastCalledWith("even");
  // expect(onResult).toHaveBeenLastCalledWith("odd");
});
