


let arr=[10,20,30,40,50,60,70,80];
let ans=arr.map(function(maal){
    return maal*10;
})
console.log(ans);


//filter

let arr2=[10,20,30,40,50,60,70,80];
let ans2=arr2.filter(function(maal){
    return maal>50;
})
console.log(ans2);


///reduce


let arr3=[10,20,30,40,50];
let ans3=arr3.reduce(function(acc,cv){
    console.log(acc);
    if(acc%2==0){
        return acc;
    }
    console.log(cv);

    return acc+cv;
})
console.log(ans3);

// 
//indexof , findindex,fill







