let arr = [1,10,2]


arr.sort(customLogic)


// function customLogic(a,b){
//     if(a<b){
//        return -1
//     }
//     else if(a>b){
//         return 1
//     }
// }

function customLogic(a,b){
    //   return a-b // ascending order
    return b-a // descending order
}

console.log(arr)