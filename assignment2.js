// TEST DATA 1
// 1. Store Mark's and John's mass and height in variables
let markMass = 78;    
let markHeight = 1.69; 
let johnMass = 92;         
let johnHeight = 1.95;  

// 2. Calculate both their BMIs using the formula (you can even implement both versions). I implemented version 1
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI)

// TEST DATA 2
// 1. Store Mark's and John's mass and height in variables
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// 2. Calculate both their BMIs using the formula (you can even implement both versions). I implemented version 1
let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / johnHeight2 ** 2;

// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI2);
console.log(johnBMI2);
console.log(markHigherBMI2);


