

let num1=10;
let num2=num1; 

console.log(" before ",num1,num2);
num1=num1+20;
console.log("after ",num1,num2);



//primitive - value pass 

//non prim - refernce type - address pass
// {} [] ()

let array1=[10,20,30,40,50];
let array2=array1;
console.log("before ",array1,array2);
array1.pop();
console.log("after ",array1,array2);
array2.push(1000);
console.log("after 2", array1,array2);



let obj={
    name:"vikas",
    age:27,
    salary:10000,
    address:"delhi",

}

let obj2=obj;
console.log("before ",obj,obj2);
obj.marks=75.50;
console.log("after ",obj,obj2);
obj2.gender="male";
console.log("after 2",obj,obj2);


//rest and spread  ... es6 

// function sum(a,b,c){
//     return a+b+c;
// }

// let ans=sum(100,200,300,400,500)
// console.log(ans);

/*
100+undefine d
100+NaN=
100+ILLEGILA=ILLEGAL = NAN

*/

// function sum(...x){
//     console.log(x);
//     let ans=0;
//     for(let i=0;i<x.length;i++){
//         ans=ans+x[i]
        
//     }
//     return ans;
// }

// let ans=sum(10,20,30,40,50,60)
// console.log(ans);

//spread operator-  deep copy 

let arr1=[10,20,30,40];
// let arr2=arr1; //shallow copy

let arr2=[...arr1];
console.log("before ",arr1,arr2);
arr1.push(100);
console.log("after ",arr1,arr2);






function product(...x){
    let ans=1;
    for(const maal of x){
        ans=ans*maal;

    }
    return ans ;
}

let ans =product(1,2,3,4,5,6);
console.log(ans);




