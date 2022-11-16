/*17th Program: Shrinking Guest List: 
You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.*/

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
 console.log(names+" we are shrinking guest list and now, there will be only two guest of you will be invited, reason will be shared in next msg.");
console.log(names.shift()+", i am sorry, i can`t invite you to the dinner, due to miss-commounication of the resturant staff they booked small table.");
console.log(names.shift()+", i am sorry, i can`t invite you to the dinner, due to miss-commounication of the resturant staff they booked small table.");
console.log(names.shift()+", i am sorry, i can`t invite you to the dinner, due to miss-commounication of the resturant staff they booked small table.");
console.log(names.shift()+", i am sorry, i can`t invite you to the dinner, due to miss-commounication of the resturant staff they booked small table.");
console.log(names.shift()+", finally, you are invited for to the dinner at 7pm at abc resturant.");
console.log(names.shift()+", finally, you are invited for to the dinner at 7pm at abc resturant.");
console.log(names);