// PASSED CODEWAR CHALLENGES

/*
// CodeWars #1
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  const ab_diff = [];
  const ab = function () {
    a.concat(b).forEach((int, i) =>
      a.includes(int) && b.includes(int) ? a.splice(i) : ab_diff.push(int)
    );
  };
  ab();
  console.log(ab_diff);
}
*/

/*
// CodeWars #2
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  //code here
  str = str.toLowerCase();
  let x = 0;
  let o = 0;
  if (str.includes('x') && str.includes('o')) {
    const arr = str.split('');
    for (const cur of arr) {
      if (cur === 'x') x++;
      if (cur === 'o') o++;
    }
    return x === o;
  } else if (str.includes('o')) {
    return false;
  } else if (str.includes('x')) {
    return false;
  } else return true;
}
*/

/*
// CodeWars #3
function friend(friends) {
  //your code here
  const friendsArr = friends.filter((name) => name.length === 4);
  return friendsArr;
}
console.log(friend(["Ryan", "Kieran", "Mark"]));
*/

// Codewars #4
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Solution #1
/*
function isPrime(num) {
  //TODO
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
*/

// Solution #2
/*
function isPrime(num) {
  //TODO
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}
*/
