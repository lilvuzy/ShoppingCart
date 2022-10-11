const tax_rate = prompt("Enter tax rate (0.10)");
const shipping_threshold = prompt("Enter shipping threshold (1000)");
let subTotal = 0;
let tax = 0;
let grandTotal = 0;
let shipping = 0;

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

cart.forEach((cart) => {
  subTotal = subTotal + calculateTotal(cart.quantity, cart.product.price);
  outputCartRow(cart, calculateTotal(cart.quantity, cart.product.price));
});

if (subTotal > shipping_threshold) {
  let shipping = 0;
} else {
  let shipping = 40;
}

tax = calculateTax();
shipping = calculateShipping();
grandTotal = subTotal + tax;

outputCosts();
