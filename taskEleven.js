const items = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 5 },
  { quantity: 1, price: 20 },
  { quantity: 4, price: 7 },
];

function calculateTotalValue(itemsArray) {
  return itemsArray.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
}

const result = calculateTotalValue(items);
console.log(`Total value: $${result}`); // Output: Total value: $83
