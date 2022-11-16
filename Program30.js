/*30th Program: Hello Admin: 
Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website. 
Loop through the array, and print a greeting to each user:*/

var users=["Admin", "Eric", "John", "Ali", "Zain"];
for(i=0; i<users.length-1; i++)
{ if (users[i] =='Admin') {
    console.log(' Hello '+users[i]+', would you like to see a status report?');
} else {console.log(' Hello '+users[i]+', thanks for logging in again');}}