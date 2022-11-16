/* 44th Program: Sandwiches: 
Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
 Call the function three times, using a different number of arguments each time.
*/

function itemsPerson(list) {
console.log('\nList of Items in Sandwich:');
list.forEach(e  => {
    console.log(e);
});
}
var sandList = ['Ketchup', 'Beaf','Garlic Mayo']
itemsPerson(sandList);

var sandList = ['Grilled Sausage', 'Hot Sauce','Onion']
itemsPerson(sandList);

var sandList = ['Smoky Wings', 'Jallapeno','Mustard']
itemsPerson(sandList);