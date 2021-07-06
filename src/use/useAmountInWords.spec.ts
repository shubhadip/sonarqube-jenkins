import { multiply } from "./useAmountInWords";

test("set version in state", () => {
  const data = multiply(4, 5);
  expect(data).toBe(20);
});
