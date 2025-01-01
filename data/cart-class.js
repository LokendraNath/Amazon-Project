class Cart {
  cartItems; // cart item ka list
  localStoreKey; // data save karne ke liye

  constructor(localStoreKey) {
    this.localStoreKey = localStoreKey;
    this.loadFromStorage();
  }

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStoreKey));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionsId: "1",
        },
        {
          productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
          quantity: 1,
          deliveryOptionsId: "2",
        },
      ];
    }
  }
  saveToStorage() {
    localStorage.setItem(this.localStoreKey, JSON.stringify(this.cartItems));
  }
  addToCart(productId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }

    this.saveToStorage();
  }

  removeFromCart(productid) {
    const newCart = [];

    this.cartItems.forEach((item) => {
      if (item.productId !== productid) {
        newCart.push(item);
      }
    });

    this.cartItems = newCart;

    this.saveToStorage();
  }
}

// this generate new object
// -> eg. cart,businessCart is instanceof Cart
const cart = new Cart("cart2-oop");
const businessCart = new Cart("cart2-oopBusiness");

console.log(cart);
console.log(businessCart);

// Check kar rha hai ki ye instance is class ka hai ki nhi
console.log(businessCart instanceof Cart);
