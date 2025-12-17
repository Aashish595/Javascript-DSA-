// capitalization 
// Input: ["hello world"] => Output: [ 'Hello World' ]



function reverseWords(arr){
      return arr.map(s => s.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "))
}





 
console.log(reverseWords(["hello world"]));    
