// Reverse only EVEN indexed words
function reverseWords(arr){
      return arr.map(s => s.split(" ").map(w => w.length > 4 ? w.split('').reverse().join('') : w))
}


console.log(reverseWords(["Hello World", "I love JavaScript", " FAANG Interview "]));    