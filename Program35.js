/* 35th Program: Animals 
Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!
*/

let anim = ["goat" , "cow" , "buffalo"];
for (i=0 ; i < anim.length ; i++) {
    console.log(anim[i]);
}
for (j=0 ; j < anim.length ; j++) {
    if (anim[j] == "goat") {
        console.log(anim[j] + " milk is very used in skin care industry.");
    } else  if (anim[j] == "cow") {
        console.log(anim[j] + " milk mix with yougurt to form a delicious cold drink.");
    } else {
        console.log(anim[j] + " milk is very healthy.");
    };
}
console.log(anim + " any of these animals would make a great pet!");