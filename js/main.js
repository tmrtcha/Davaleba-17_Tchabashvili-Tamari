// EXERCISE 1
console.log("EXERCISE 1 _ for loop");

for (let i = 0; i < 25; i++) {
  console.log(i);
}

// EXERCISE 2
console.log("EXERCISE 2 _ while loop");

let i = 0;
while (i < 10) {
  console.log("current i in while", i);
  i++;
}

// EXERCISE 3
console.log("EXERCISE 3 _ do while loop");
let j = 0;
do {
  console.log("current j in do while", j);
  j++;
} while (j < 15);

// EXERCISE 4
console.log("EXERCISE 4 _ even numbers with for loop");

const numbers = [23, 44, 123, 234, 765, 1023, 2368];

for (let k = 0; k < numbers.length; k++) {
  if (numbers[k] % 2 === 0) {
    console.log("even number:", numbers[k]);
  }
}

// EXERCISE 5
console.log("EXERCISE 5 _ switch");

const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("დღეს არის კვირა");
    break;
  case 1:
    console.log("დღეს არის ორშაბათი");
    break;
  case 2:
    console.log("დღეს არის სამშაბათი");
    break;
  case 3:
    console.log("დღეს არის ოთხშაბათი");
    break;
  case 4:
    console.log("დღეს არის ხუთშაბათი");
    break;
  case 5:
    console.log("დღეს არის პარასკევი");
    break;
  case 6:
    console.log("დღეს არის შაბათი");
    break;
  default:
    console.log("ასეთი დღე არ არსებობს კვირაში");
    break;
}

// EXERCISE 6
console.log("EXERCISE 6 _ DATA");

const products = data.products;
const previousPrice = data.products.previousPrice;
const price = data.products.price;
for (let n = 0; n < products.length; n++) {
  if (
    previousPrice !== "false" &&
    products[n].previousPrice > products[n].price
  ) {
    console.log(products[n]);
  }
}

//
