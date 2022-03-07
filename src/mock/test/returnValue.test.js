const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce("x")
  .mockReturnValueOnce(false)
  .mockReturnValue(true);

test("test", () => {
  console.log(mockFn(), mockFn(), mockFn(), mockFn());
  expect(mockFn).toHaveBeenCalledTimes(4);
});

// user 정보
const getUserMockFn = jest.fn();

getUserMockFn.mockResolvedValue({ name: "홍길동", age: 15 });

test("name : 홍길동, age : 15", () => {
  getUserMockFn().then(res =>
    expect(res).toStrictEqual({ name: "홍길동", age: 15 })
  );
});
