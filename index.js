// using ES module syntax to import the functions that we have created in utility.js file
import { groupMembers, convertUnit, square, squareRoot } from './utility.js';

// executing the first function where it only takes user inputs of group member names
groupMembers("Angel", "Chao", "Masashi");

// second function for converting kg to gm
console.log("\n2kg = ", convertUnit(2), "gm");

// third function for calculating square of a number
console.log("\nSquare of 4 = ", square(4));

// forth function to calculate square root of a number
console.log("\nSquare root of 4 = ", squareRoot(4));