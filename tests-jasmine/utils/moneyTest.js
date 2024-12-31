import { formatPrice } from "../../scripts/utils/money.js";

describe("test suite : formateCurrency", () => {
  it("convert cents into inr rupees formate", () => {
    expect(formatPrice(2090)).toEqual("2,090");
  });

  it("work with 0", () => {
    expect(formatPrice(0)).toEqual("0");
  });
});
