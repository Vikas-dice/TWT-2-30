

let arr=[10,20,30,40,50,60];
arr.pop();
console.log(arr);


//push
let ans=arr.push(300);
console.log(ans);
console.log(arr);


//shift

arr.shift();
console.log(arr);
arr.shift();
console.log(arr);


//unshift
arr.unshift(2,100,5000);
console.log(arr);

//slice

let array2=[10,20,30,40,50,60,70,80];
let ans2=array2.slice(2,5);
console.log(ans2);
console.log(array2);

//-ve index

let array3=[10,20,30,40,50,60];
let ans3=array3.slice(4,1);
console.log(ans3);

//splice

let array4=[1,2,3,4,5,6,7,8,9,10];
// let ans4=array4.splice(2,3);
// console.log(ans4);
// console.log(array4);


//-ve case
let ans5=array4.splice(-2,4);
console.log(ans5);
console.log(array4);



let array5=[10,20,30,40,50,60,70,80,90];
let ans6=array5.splice(-5,7)
console.log(ans6);
console.log(array5);


// map filter reduce







