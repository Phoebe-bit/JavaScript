// TEST DATA 1
// 1. Store Mark's and John's mass and height in variables
const markMass = 78;    
const markHeight = 1.69; 
const johnMass = 92;         
const johnHeight = 1.95;  

// 2. Calculate both their BMIs using the formula: BMI = mass / height ** 2
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

// 3. Create a boolean variable 'markHigherBMI'
const markHigherBMI = markBMI > johnBMI;

console.log("markBMI");
console.log("johnBMI");
console.log("markHigherBMI:");



// TEST DATA 2
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("markBMI2");
console.log("johnBMI2");
console.log("markHigherBMI2:");


