//Star
printStar = (n) => {
    for(let i = 1 ; i <= n ; i++){
        let ans = ""
        for(let j = 1 ; j <= i ; j++){
            ans+="*";
        }
        console.log(ans);
    }
}

printStar = (n) => {
    let ans = ""
    for(let i = 1 ; i <= n ; i++){
        ans+="*";
        console.log(ans);
    }
}



printStar(3);