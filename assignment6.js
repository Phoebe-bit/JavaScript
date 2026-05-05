    //  1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (a, b, c) => (a + b + c) / 3;

// 2. Use the function to calculate the average for both teams
scoreDolphins = calcAverage (44, 23, 71)
scoreKoalas = calcAverage (65, 54, 49)
console.log(scoreDolphins);
console.log(scoreKoalas);


// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins!');
  }
}

// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
//TEST DATA 1
const avgDolphins1 = calcAverage(44, 23, 71); 
const avgKoalas1 = calcAverage(65, 54, 49); 
checkWinner(avgDolphins1, avgKoalas1);

// TEST DATA 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);
