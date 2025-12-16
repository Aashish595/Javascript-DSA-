// function fact(num){
fact = (num) => {
    let ans = 1 ;  
    for(let i = num ; i >= 1 ; i--){
          ans*=i;
      }
      return ans ;
    
}
console.log(fact(5)) 