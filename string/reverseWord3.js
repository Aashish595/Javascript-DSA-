// Reverse everything but remove spaces
// Input: ["Hello World"] => Output: [ 'olleHdlroW' ]


function reverseWords(arr){
      return arr.map(s => s.split(" ").map(
            w => w.split("").reverse().join("")
      ).join(""))
}





 
    
console.log(reverseWords([" hello world"]));
console.log(reverseWords(["Hello World"]));  