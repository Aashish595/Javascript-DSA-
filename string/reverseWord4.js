// Reverse the order of words + reverse each word
// Input: ["Hello World"] => Output: [ 'dlroW olleH' ]

function reverseWords(arr){
     return arr.map(s => s.split(" ").map(
        w => w.reverse().split("").reverse().join()
     ))
}





 
    
console.log(reverseWords([" hello world"]));
console.log(reverseWords(["Hello World"]));  