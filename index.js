const input = require("readline-sync");


//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.


let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
// for (let i = 0; i < 6; i++) {
//   const myMeal = `Meal #${i + 1}:${proteins[i]} ${grains[i]} ${veggies[i]} ${beverages[i]} ${desserts[i]}`;
//   console.log(myMeal);
// }

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
const mealNumString = input.question("How many meals would you like to make?:");
const mealNum = Number(mealNumString);

if (mealNum < 1 || mealNum > 6 ) {
console.log("Thats an ERROR");
}else{
  let mealsMade = 0;
while (mealsMade < mealNum) {
 const myMeal = `Meal #${mealsMade + 1}:${proteins[mealsMade]} ${grains[mealsMade]} ${veggies[mealsMade]} ${beverages[mealsMade]} ${desserts[mealsMade]}`;
  console.log(myMeal);
  mealsMade = mealsMade + 1;
}
}




//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”