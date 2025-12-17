// reverse Each Word Seperate(preverse space between them )
// Input: ["Hello", "World"] => Output: [ 'olleH', 'dlroW' ]
function reverseWords(arr){
      return arr.map(word => word.split("").reverse().join(''));
}





console.log(reverseWords(["Hello", "World"]));    
