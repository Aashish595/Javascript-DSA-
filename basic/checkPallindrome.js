checkPallindrome = (s) => {
    let revS = s.split("").reverse().join("");
    return revS === s; 
}

console.log(checkPallindrome("MoM"));

