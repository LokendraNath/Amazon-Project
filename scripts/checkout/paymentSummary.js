import { cart, calculateCartQty } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOption.js";
import { formatPrice } from "../utils/money.js";

export function renderPaymentSummary() {
  let productPrice = 0;
  let shippingPrice = 0;
  const cartQty = calculateCartQty();

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPrice += product.price * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionsId);

    shippingPrice += deliveryOption.price;
  });
  const totalBeforeTax = productPrice + shippingPrice;
  const taxPrice = totalBeforeTax * 0.18;
  const totalPrice = totalBeforeTax + taxPrice;

  const paymentSummaryHTML = `
      <div class="payment-summary-title">Order Summary</div>
      <div class="payment-summary-row">
        <div class="js-items-show">Items (${cartQty}):</div>
        <div class="payment-summary-money">₹${formatPrice(productPrice)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">₹${formatPrice(shippingPrice)}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">₹${formatPrice(totalBeforeTax)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (18%):</div>
        <div class="payment-summary-money">₹${formatPrice(taxPrice)}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">₹${formatPrice(totalPrice)}</div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>
  `;
  document.querySelector(".payment-summary").innerHTML = paymentSummaryHTML;
}
