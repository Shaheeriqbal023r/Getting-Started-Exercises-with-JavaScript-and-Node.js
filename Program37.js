/* 37th Program: Large Shirts
Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt(size= "Large", state = "I love JavaScript") {
   
    
    console.log("Customer required size is "+ size + "\nPrinted message would be " + state);


    var state = " I love JavaScript but have to learn type script"
    console.log("Customer required size is "+ size + "\nPrinted message would be " + state);

    var size = " XS";
    var state = " Y not Meri Jan..!!"
    console.log("Customer required size is "+ size + "\nPrinted message would be " + state);

}
make_shirt()