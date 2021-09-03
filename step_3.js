// (1 Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.






// (2 Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(string) {
  for(let i = 0; i < string.length; i++) {
    for(let j = i + 1; j < string.length; j++) {
        if(string[i] === string[j]) {
            return false
        }
    }
  }
  return true
}

let test = "Clint"

console.log(hasUniqueChars(test))


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.




// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

let wordsArray = ['Hi', 'hello', 'clinton', 'testing a longer string']

function findLongestWord (arr) {
    let lengthCount = 0
    let longestWord = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > lengthCount) {
            lengthCount = arr[i].length
            longestWord = arr[i]
        }
    }
    console.log(longestWord)
}
findLongestWord(wordsArray)