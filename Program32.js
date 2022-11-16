/*32nd Program: Checking Usernames: 
Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. 
Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users=["Ali", "Eric", "John", "Ahmed", "Zain"];
let new_users=["Kashif", "eric", "Fahim", "Waseem", "zain"];
const current_case = current_users.map(current_users => current_users.toLowerCase())
const new_case = new_users.map(new_users => new_users.toLowerCase())
for (i = 0 ; i < 5 ; i++) {
        if (new_case.includes(current_case[i])) {
                console.log(current_case[i]+ " username is taken");

         } else {console.log(current_case[i]+" username is available, you can have this name")}
}
  
