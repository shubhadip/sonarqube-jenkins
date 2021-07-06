export function multiply(a: number, b: number): number {
  return a * b;
}

/* istanbul ignore next */
export function useAmountInWords(
  param: number,
  precision = 1,
  factor = 1000,
  shortUnit = false
): { amount: string | undefined } {
  const data = param;

  if (data === null || data === undefined) {
    return { amount: undefined };
  }

  if (isNaN(data)) {
    return { amount: undefined };
  }
  const amount = `₹ ${Number(data)}`;

  return { amount };
}
