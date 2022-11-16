/*19th Program: Dinner Guests: 
Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/

var names=["Ali","Laraib","Zain"];
 console.log(names[0]+" We booked a bigger dinner table at the resuturant, and, now we will have three more friends along with you people.");
 console.log(names[1]+" We booked a bigger dinner table at the resuturant, and, now we will have three more friends along with you people.");
 console.log(names[2]+" We booked a bigger dinner table at the resuturant, and, now we will have three more friends along with you people.");
 names.unshift("Mohsin");
 names.splice(2,0,"Usama");
 names.push("Asif");
 console.log(names[0]+" you are invited at my promotion party to abc resturant at 7pm on table# 11.");
 console.log(names[1]+" you are invited at my promotion party to abc resturant at 7pm on table# 11.");
 console.log(names[2]+" you are invited at my promotion party to abc resturant at 7pm on table# 11.");
 console.log(names[3]+" you are invited at my promotion party to abc resturant at 7pm on table# 11.");
 console.log(names[4]+" you are invited at my promotion party to abc resturant at 7pm on table# 11.");
 console.log(names[5]+" you are invited at my promotion party to abc resturant at 7pm on table# 11.");
 console.log(names.length+ " people are invited to the dinner.");