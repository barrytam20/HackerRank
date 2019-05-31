/*
 Name: Staircase
 Difficulty: Easy
 Score: 10
 Link: https://www.hackerrank.com/challenges/staircase/
*/

// Complete the staircase function below.
function staircase(n) {
    let tmp = n;
    for (let index = 0; index < n; index++){
        console.log(' '.repeat(--tmp) + '#'.repeat(index + 1 ));
    }
}

staircase(6);
