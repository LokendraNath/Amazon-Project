import { formatCurrency } from "../scripts/utils/money.js";

export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }
  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML() {
    return "";
  }
}

// Inheritance Class (Reuse Code Between Classes)
export class Clothing extends Product {
  sizeChartLink;

  constructor(productDetails) {
    super(productDetails); // this will call the parent constructor !!!
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML() {
    //super.extraInfoHTML(); //This will call parent method !!!
    return `
      <a href="${this.sizeChartLink}" target="_blank">
      Size Chart
      </a>
    `;
  }
}

export class Appliance extends Product {
  instructionsLink;
  warrantyLink;

  constructor(productDetails) {
    super(productDetails);
    this.instructionsLink = productDetails.instructionsLink;
    this.warrantyLink = productDetails.warrantyLink;
  }
  extraInfoHTML() {
    //super.extraInfoHTML(); //This will call parent method !!!
    return `
      <a href="${this.instructionsLink}" target="_blank">
      Instructions
      </a>
      <a href="${this.warrantyLink}" target="_blank">
      Warranty
      </a>
    `;
  }
}

export let products = [];

export function loadProductsFetch() {
  const promise = fetch("https://supersimplebackend.dev/products")
    .then((res) => {
      return res.json();
    })
    .then((ProductData) => {
      products = ProductData.map((productDetails) => {
        if (productDetails.type === "clothing") {
          return new Clothing(productDetails);
        } else if (productDetails.type === "appliances") {
          return new Appliance(productDetails);
        }
        return new Product(productDetails);
      });
      console.log("load products");
    })
    .catch((err) => {
      console.log("Unexpected error. Please try again later.");
    });
  return promise;
}

/*
loadProductsFetch().then(() => {
  console.log("next step");
});
*/

export function loadProducts(func) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === "clothing") {
        return new Clothing(productDetails);
      } else if (productDetails.type === "appliances") {
        return new Appliance(productDetails);
      }
      return new Product(productDetails);
    });
    console.log("load products");

    func();
  });

  xhr.addEventListener("error", (error) => {
    console.log("Unexpected error. Please try again later.");
  });

  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
}
loadProducts();
