
let arr=[10,20,30,40,{a:10,b:20},[1,2,3,4],function(){
    console.log("hello array");
},true,false,undefined,null];

//traverse 

arr.forEach(function(maal){
    console.log(maal);
})


arr.forEach(maal=>console.log(maal))

//method 2


let arr2= new Array(10,20,30,40,50);
console.log(arr2);


//method 3 - array.of

let arr3= Array.of(10,20,30,40,50,30,50,30,80);
console.log(arr3);


//inbuilt methods 

//isarray - true /false
console.log(Array.isArray(arr3));
//indexof


// console.log(arr3.indexOf(30));
//includes

console.log(arr3.includes(300));


//findlastindex
// console.log(arr3.findLastIndex(30));


//shift unshift push pop

// console.log(arr3.push(500));

// let array=[10,20,30,40,50,60,70]
// let ans=array.push(500)
// console.log(ans);




