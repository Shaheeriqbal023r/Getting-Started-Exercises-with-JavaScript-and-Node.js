/* 43rd Program: Unchanged Magicians: 
Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and 
one array with the Great added to each magician’s name.*/

function show_magicians(arr) {
    var i = "David Copperfield"
    var j = "David Blaine"
    var k = "Criss Angel"
    arr = [i, j, k];
    console.log(arr);
    return arr
}
function make_great(arr1) {
    i = "The Great David Copperfield"
    j = "The Great David Blaine"
    k = "The Great Criss Angel"
    arr1 = [i, j, k];
    console.log(arr1)
    return arr1
}
make_great()
show_magicians()

