//TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
//TEST DATA
// 1. Calculate the average score for each team, using the test data.
averageScoreDolphins = (96 + 108 + 89) / 3
averageScoreKoalas = (88 + 91 + 110) / 3
console.log(averageScoreDolphins);
console.log(averageScoreKoalas);
//2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
if (averageScoreDolphins > averageScoreKoalas) {
  console.log("Dolphins win the trophy🏆");
  }else if (averageScoreKoalas > averageScoreDolphins) {
    console.log("Koalas win the trophy🏆");
    
  } else if (averageScoreDolphins === averageScoreKoalas) {
    console.log("It's a draw!");
      } 
       //3. BONUS 1: Include a requirement for a minimum score of 100.
 if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log("Dolphins win the trophy🏆");
   }else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >=100) {
    console.log("Koalas win the trophy🏆");
       } else {
    console.log("No one wins the trophy 😞 because no one got up to 100!");
       }
//4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log("Dolphins win the trophy🏆");
   }else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >=100) {
    console.log("Koalas win the trophy 🏆");
   }else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas) {
    console.log("Both win the trophy🏆");
       } else {
    console.log("Nobody wins😞 the trophy");
       }

       //TEST DATA BONUS 1
       // 1. Calculate the average score for each team, using the test data.
averageScoreDolphins2 = (97 + 112 + 101) / 3
averageScoreKoalas2 = (109 + 95 + 123) / 3
console.log(averageScoreDolphins2);
console.log(averageScoreKoalas2);
//2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
if (averageScoreDolphins2 > averageScoreKoalas2) {
  console.log("Dolphins win the trophy🏆");
  }else if (averageScoreKoalas2 > averageScoreDolphins2) {
    console.log("Koalas win the trophy🏆");
      } else if (averageScoreDolphins === averageScoreKoalas) {
    console.log("It's a draw!");
      } 
       //3. BONUS 1: Include a requirement for a minimum score of 100.
        if (averageScoreDolphins2 > averageScoreKoalas2 && averageScoreDolphins2 >= 100) {
  console.log("Dolphins win the trophy🏆");
   }else if (averageScoreKoalas2 > averageScoreDolphins2 && averageScoreKoalas2 >=100) {
    console.log("Koalas win the trophy🏆");
       } else {
    console.log("No one wins the trophy 😞 because no one got up to 100!");
       }
//4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
if (averageScoreDolphins2 > averageScoreKoalas2 && averageScoreDolphins2 >= 100) {
  console.log("Dolphins win the trophy🏆");
   }else if (averageScoreKoalas2 > averageScoreDolphins2 && averageScoreKoalas2 >=100) {
    console.log("Koalas win the trophy 🏆");
   }else if (averageScoreDolphins2 === averageScoreKoalas2 && averageScoreDolphins2 >= 100 && averageScoreKoalas2 >=100) {
    console.log("Both win the trophy🏆");
       } else {
    console.log("Nobody wins😞 the trophy");
       }

       //TEST DATA BONUS 2
        // 1. Calculate the average score for each team, using the test data.
averageScoreDolphins3 = (97 + 112 + 101) / 3
averageScoreKoalas3 = (109 + 95 + 106) / 3
console.log(averageScoreDolphins3);
console.log(averageScoreKoalas3);
//2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
if (averageScoreDolphins3 > averageScoreKoalas3) {
  console.log("Dolphins win the trophy🏆");
  }else if (averageScoreKoalas3 > averageScoreDolphins3) {
    console.log("Koalas win the trophy🏆");
      } else if (averageScoreDolphins3 === averageScoreKoalas3) {
    console.log("It's a draw!");
      } 
       //3. BONUS 1: Include a requirement for a minimum score of 100.
        if (averageScoreDolphins3 > averageScoreKoalas3 && averageScoreDolphins3 >= 100) {
  console.log("Dolphins win the trophy🏆");
   }else if (averageScoreKoalas3 > averageScoreDolphins3 && averageScoreKoalas3 >=100) {
    console.log("Koalas win the trophy🏆");
       }else if (averageScoreDolphins3 === averageScoreKoalas3 && averageScoreDolphins3 >= 100 && averageScoreKoalas3 >= 100)
    console.log("They are both entitled to the trophy 🏆");
       //4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
if (averageScoreDolphins3 > averageScoreKoalas3 && averageScoreDolphins3 >= 100) {
  console.log("Dolphins win the trophy🏆");
   }else if (averageScoreKoalas3 > averageScoreDolphins3 && averageScoreKoalas3 >=100) {
    console.log("Koalas win the trophy 🏆");
   }else if (averageScoreDolphins3 === averageScoreKoalas3 && averageScoreDolphins3 >= 100 && averageScoreKoalas3 >=100) {
    console.log("Both win the trophy🏆");
       } else {
    console.log("Nobody wins😞 the trophy");
       }