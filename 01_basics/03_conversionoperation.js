let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN"not a number"

let isLoggedIn = "vijay";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true / 0 => false
// "vijay" => true
// "" => false

let someNumber = 33;

let stringNumber = Number(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
