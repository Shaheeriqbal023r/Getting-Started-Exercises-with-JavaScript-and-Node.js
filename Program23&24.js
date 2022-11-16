/*23rd & 24th Program: Conditional Tests: 
Write a series of conditional tests. Print a statement describing each test and your prediction for the 
results of each test. Your code should look something like this:
*/

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
let car = "Nissan";
let car_a = "White";
console.log("i predict its true"); console.log(car == "Nissan");
console.log("i predict its false"); console.log(car_a== "Nissan");
console.log("i predict its false"); console.log(car == "White");
console.log("i predict its true"); console.log(car_a == "White");
var car_b = car == "Nissan" && car == "White";
console.log("i predict its false"); console.log("5. " + car_b);
var car_b = car == "Nissan" || car == "White";
console.log("i predict its true"); console.log("6. " + car_b);
var car_b = car == "Nissan" && car == "White";
console.log("i predict its true"); console.log("7. " + !car_b);
var car_b = car == "Nissan" || car == "White";
console.log("i predict its false"); console.log("8. " + !car_b);
var car_b = car == "Nissan" && car == "White";
console.log("i predict its false"); console.log("9. " + !!car_b);
var car_b = car == "Nissan" || car == "White";
console.log("i predict its true"); console.log("10. " + !!car_b);
var num = 6
var nums = 7;
console.log(!!nums);
console.log(nums==7);
console.log(nums > 7);
console.log(num > 5);
console.log(nums < 7);
var nums = num > 5 || num < 10;
console.log(nums);
console.log(nums==7);
console.log(nums > 7);
console.log(nums < 7);
var names=["Ali","Laraib","Zain"];
console.log(names.includes("Zain"));
console.log(names.includes("Hassan"));
console.log(names.push("Hassan"));
console.log(names.includes("Hassan"));