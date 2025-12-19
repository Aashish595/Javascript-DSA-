// Reverse only Odd indexed words
function reverseWords(arr){
      return arr.map(s => s.split(" ").map((w,i) => i%2 == 1 ? w.split('').reverse().join('') : w))
}


console.log(reverseWords(["Hello World", "I love JavaScript", " FAANG Interview "]));    