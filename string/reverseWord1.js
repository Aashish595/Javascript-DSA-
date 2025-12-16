// reverse Each Word Seperate(preverse space between them )
// Input: ["Hello", "World"] => Output: [ 'olleH', 'dlroW' ]
function reverseWords_v1(arr){
      return arr.split('')
}


/* ------------------------------
   🛠  Pick the version you want
-------------------------------- */
// let reverseWords = reverseWords_v1;
// let reverseWords = reverseWords_v2;
// let reverseWords = reverseWords_v3;
// let reverseWords = reverseWords_v4;
// let reverseWords = reverseWords_v5;
// let reverseWords = reverseWords_v6; 


console.log(reverseWords(["Hello", "World"]));     // depends on version
console.log(reverseWords([" hello world"]));
console.log(reverseWords(["Hello World"]));