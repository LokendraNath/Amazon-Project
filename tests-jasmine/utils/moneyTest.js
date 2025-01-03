import { formatPrice } from "../../scripts/utils/money.js";

describe("test suite: Amazon project", () => {
  describe("Format Price", () => {
    it("converts Informal into formal", () => {
      expect(formatPrice(18500)).toEqual("18,500");
    });

    it("works with 0", () => {
      expect(formatPrice(0)).toEqual("0");
    });
  });
});
