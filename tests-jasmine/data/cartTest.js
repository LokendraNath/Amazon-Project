import { addToCart, cart } from "../../data/cart.js";

describe("test suite: addToCart()", () => {
  beforeEach(() => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]); // Mocked empty cart
    });
  });

  it("should add an item to the cart", () => {
    console.log(localStorage.getItem("cart")); // Logs the mocked value
    
    addToCart("83d4ca15-0f35-48f5-b7a3-1ea210004f2e"); // Call the function to test
    expect(cart.length).toEqual(1); // Assertion for expected cart length
  });
});

