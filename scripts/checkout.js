import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";

// import '../data/backend-practice.js'

async function loadPage() {
  try {
    // throw "error1";

    await loadProductsFetch();

    const value = await new Promise((res,reject) => {
      // throw 'error2'
      loadCart(() => {
        // reject('error3');
        res("value3");
      });
    });
  } catch (err) {
    console.log("Unexpected error. Please try again later.");
  }

  renderOrderSummary();
  renderCheckoutHeader();
  renderPaymentSummary();
}

loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((res) => {
    loadCart(() => {
      res("who are you");
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderCheckoutHeader();
  renderPaymentSummary();
});
*/

/*
new Promise((res) => {
  loadProducts(() => {
    res("value1");
  });
})
  .then((value) => {
    return new Promise((res) => {
      loadCart(() => {
        res();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderCheckoutHeader();
    renderPaymentSummary();
  });
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderCheckoutHeader();
    renderPaymentSummary();
  });
});
*/
