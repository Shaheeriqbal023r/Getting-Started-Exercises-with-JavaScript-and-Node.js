/*28th Program: Stages of Life: 
Write an if-else chain that determines a person’s stage of life. 
Set a value for the variable age, and then:
*/

var age = Number(prompt("Please, enter age"));
if (age < 2) {
    console.log("He/She is a baby")
} else if (age >= 2 && age < 4) {
    console.log("He/She is a toddler")
} else if (age >= 4 && age < 13) {
    console.log("He/She is a kid")
} else if (age >= 13 && age < 20) {
    console.log("He/She is a teenager")
} else if (age >= 20 && age < 65) {
    console.log("He/She is an adult")
} else  {(age > 65)
    console.log("He/She is an elder")}

