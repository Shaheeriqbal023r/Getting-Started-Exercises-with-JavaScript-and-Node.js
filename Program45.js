/* 45th Program: Cars: 
Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make sure all the information
was stored correctly.
*/
function car()
{
    var car_Specs={
        manufacturer:'Nissan',
        model:'GTR',
        optional_Features:{
            color:'Blue',
            transmissionType:'Auto'
        }

    }
    return car_Specs;

}
carObj = car();
for (var key in carObj) {
    if (typeof carObj[key] === "object") {
        for ( key2 in carObj[key]) {
       console.log(key2+' is '+carObj[key][key2]);
        }
    } else {
       console.log(key+' is '+carObj[key]);
    }
}
