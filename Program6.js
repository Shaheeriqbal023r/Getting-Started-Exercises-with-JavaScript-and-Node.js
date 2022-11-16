/*6th Program: Stripping Names:
Store a person’s name, and include some whitespace characters at the beginning
and end of the name. Make sure you use each character combination,
 "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. 
Then print the name after striping the white spaces.*/

var famous_person= "\tQuaid e Azam\t";
var famous_person1= "\nQuaid e Azam";
console.log(famous_person);
console.log(famous_person1);
console.log(famous_person.replace(/\s/g,''));