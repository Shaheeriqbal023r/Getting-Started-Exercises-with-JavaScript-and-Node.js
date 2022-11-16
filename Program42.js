/* 42nd Program : Great Magicians: 
Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of 
magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.

function show_magicians(arr) {
    var i = "David Copperfield"
    var j = "David Blaine"
    var k = "Criss Angel"
    arr = [i, j, k];
    console.log(arr);
    return arr
}
function make_great(arr) {
    var i = "David Copperfield"
    var j = "David Blaine"
    var k = "Criss Angel"
    arr = [i, j, k];
    for (l = 0; l < arr.length ; l++){
    console.log("The Great "+ arr[l]);
}
}
make_great()
show_magicians()
*/
function items_list(items)
{

console.log('List of Items in Sandwich:\n');
items.forEach(e  => {
    console.log(e);

});

}
var itemList = ['checken', 'pickles','Mayo']

items_list(itemList);

var itemList = ['BBQ Checken', 'pickles','Mayo']

items_list(itemList);
var itemList = ['Beaf', 'pickles','Mayo']

items_list(itemList);