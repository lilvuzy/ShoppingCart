/* define your functions here */
function calculateTotal(quantity, price) {
  return quantity * price;
}

function outputCartRow(item, total) {
  document.write("<tr>");
  document.write('<td><img src="images/' + item.product.filename + '"></td>');
  document.write("<td>" + item.product.title + "</td>");
  document.write("<td>" + item.quantity + "</td>");
  document.write("<td>$" + item.product.price.toFixed(2) + "</td>");
  document.write("<td>$" + total.toFixed(2) + "</td>");
  document.write("</tr>");
}

function calculateTax() {
  return subTotal * tax_rate;
}

function calculateShipping() {
  if (subTotal > shipping_threshold) {
    return 0;
  } else {
    return 40;
  }
}

function outputCosts() {
  document.write('<tr class="totals">');
  document.write('<td colspan="4">Subtotal</td>');
  document.write("<td>$" + subTotal.toFixed(2) + "</td>");
  document.write("</tr>");

  document.write('<tr class="totals">');
  document.write('<td colspan="4">Tax</td>');
  document.write("<td>$" + tax.toFixed(2) + "</td>");
  document.write("</tr>");

  document.write('<tr class="totals">');
  document.write('<td colspan="4">Shipping</td>');
  document.write("<td>$" + shipping.toFixed(2) + "</td>");
  document.write("</tr>");

  document.write('<tr class="totals">');
  document.write('<td colspan="4" class = "focus">Grand Total</td>');
  document.write('<td class="focus">$' + grandTotal.toFixed(2) + "</td>");
  document.write("</tr>");
}
