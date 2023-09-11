/** @format */

// task 3

// This code first counts the occurrences of each character in the input string using an object called charCount.
// Then, it iterates through the string again to find the first character with a count of 1 in the charCount object,
// which signifies a non-repeating character. If no non-repeating character is found, it returns _.
// You can run this code in a JavaScript environment and input a string to find the first non-repeating character
//  or the _ symbol if none is found.
function solution(s) {
  const charCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
    console.log(char);
  }
  console.log(charCount);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return "_";
}

let index = solution("abacabad");
let index1 = solution("fff");

console.log(index);

// task 2

// You are given a string s that consists of only lowercase English letters. If vowels ('a', 'e', 'i', 'o', and 'u')
//  are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.
function letterValue(c) {
  const vowels = "aeiou";
  if (vowels.includes(c)) {
    return 1;
  } else {
    return 2;
  }
}

function sumLetterValues(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    total += letterValue(s[i]);
  }
  return total;
}

const s = prompt("Enter a string: ");
const result = sumLetterValues(s);
console.log(result);
