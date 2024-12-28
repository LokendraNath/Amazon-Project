export let cart = JSON.parse(localStorage.getItem("cart2"));

if (!cart) {
  cart = [
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

export function saveToStorage() {
  localStorage.setItem("cart2", JSON.stringify(cart));
}

//because this is function related to the cart

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  const selectQty = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const quantity = Number(selectQty.value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionsId: "1",
    });
  }
  saveToStorage();
}

export function removeFromCart(productid) {
  const newCart = [];

  cart.forEach((item) => {
    if (item.productId !== productid) {
      newCart.push(item);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function calculateCartQty() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    cartItem.quantity;
  });

  return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;
  saveToStorage();
}

export function updateDeliveryOptions(productId, deliveryOptionsId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionsId = deliveryOptionsId;
  saveToStorage();
}
