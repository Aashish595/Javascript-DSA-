// Just reverse the order of words (no character reversing)
// Input: ["Hello World"] => Output: [ 'World Hello' ]

function reverseWords(arr){
     return arr.map(s => s.split(" ").reverse().join(" "));
}





 
    
console.log(reverseWords([" hello world"]));
console.log(reverseWords(["Hello World"]));  