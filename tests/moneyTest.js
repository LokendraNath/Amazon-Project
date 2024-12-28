import { formatPrice } from "../scripts/utils/money.js";

if (formatPrice(2090) === "2,090") {
  console.log("passed");
} else {
  console.log("failed");
}
