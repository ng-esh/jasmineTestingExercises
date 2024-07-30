describe("calculateMonthlyPayment tests", () => {
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 20000, years: 20, rate: 4};
  expect(calculateMonthlyPayment(values)).toEqual('121.20')
});

it("should return a result with 2 decimal places", function() {
  const values = {amount: 15009, years:7, rate:5.7};
  expect(calculateMonthlyPayment(values)).toEqual('217.11')
});

it("should handle zero rate", function() {
  const values = { amount: 10000, years: 10, rate: 0 };
  expect(calculateMonthlyPayment(values)).toEqual("NaN");
});

it("should handle zero years", function() {
  const values = { amount: 10000, years: 0, rate: 5 };
  expect(calculateMonthlyPayment(values)).toEqual("Infinity");
});

it("should handle zero amount", function() {
  const values = { amount: 0, years: 10, rate: 5 };
  expect(calculateMonthlyPayment(values)).toEqual("0.00");
});
});
/// etc
