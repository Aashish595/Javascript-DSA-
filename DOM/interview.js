


// const fetchData = new Promise((res,) => {

// })



// useEffect(() => {

//    const fetchData = async () => {
//      try {
//         const response = await fetch("");

//      } catch (error) {
//         console.log(error);
//      }
//    }

//     fetchData();
// },[])

function sum(arr){
    let result = 0;
    for(let i = 0 ; i < arr.length ; i++){
    result+=arr[i];
}
console.log(result);
}

const arr = [1,2,53,9,5,6,7]
sum(arr);


