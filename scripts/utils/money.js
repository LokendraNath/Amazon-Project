// export function formatPrice(cents) {
//   // Convert cents to rupees
//   const rupees = cents / 100;
  
//   // Format rupees with commas
//   return rupees.toLocaleString("en-IN");
// }

export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

export default formatCurrency;