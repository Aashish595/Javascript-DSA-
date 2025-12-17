// Reverse each word in a sentence string (keeping space inside string)
// Input: [" hello world"] => Output: [ 'olleh dlrow' ]



function reverseWords(arr){
      return arr.map(s => s.split(" ").map(w => w.split('').reverse().join('')).join(" "));
}





 
console.log(reverseWords([" hello world"]));    