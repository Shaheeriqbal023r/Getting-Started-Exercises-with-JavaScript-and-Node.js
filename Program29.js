/*29th Program: Favorite Fruit: 
Make a array of your favorite fruits, and then write a series of independent 
if statements that check for certain fruits in your array.
 */

var favorite_fruits=[];
favorite_fruits.push("Apple");
favorite_fruits.push("Banana");
favorite_fruits.push("Strawbery");
console.log(favorite_fruits);
if (favorite_fruits.includes("Banana")) {
    console.log("Hmm! you like to have some milk shake?")
} 
if (favorite_fruits.includes("Apple")) {
    console.log("An Apple a day keeps the Dr. away")
}
if (favorite_fruits.includes("Strawbery")) {
    console.log("Mostly people like strawbery icecream")
}
if (favorite_fruits.includes("Grape fruit")) {
    console.log("This fruit is included")
}
if (favorite_fruits.includes("Grapes")) {
    console.log("This fruit is short in market")
}