

// let array= [10,20,30,40,50,true,false,null,undefined];

// array traversal - loop

// for loop

// for(let idx=0;idx<array.length;idx++){
//     console.log(array[idx]);
// }

//while loop

// let idx=0;
// while(idx<array.length){
//     console.log(array[idx]);
//     idx++;

// }

//do while 

// let idx=0;
// do{
//     console.log(array[idx]);
//     idx++;
// }while(idx<array.length);

//for of loop

// for(const maal of array){
//     console.log(maal);
// }

//for Each loop

// array.forEach(function fun(maal){
//     console.log(maal);
// })


// let ans =array.forEach(function callback(maal){
//     console.log(maal);
  
// })

//q1- linear search in array - arr,taerget true , false

// function ls(arr,tar){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==tar){
//             return true;
//         }
//     }
//     return false;
// }

// let array=[10,20,30,40,50,60,70,80,90,100];
// let ans =ls(array,600);
// console.log(ans);


//q2 array amx and min element - span - max - min;

// let array=[10,20,30,40,5,8,19,45,88,99,100];
//max =100
//min 5
//span 100-5=95

// let max=array[0];
// let min=array[0]
// for(let i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i]
//     }
//     if(array[i]<min){
//         min=array[i]
//     }
// }
// console.log(max,min);
// let span=max-min;
// console.log(span);


//q3 - array revers e

/*
[10,20,30,40,50,60]
[60,50,40,30,20,10]

psedudocode 

arr[0]=arr[arr.length-1]



*/


// let array=[10,20,30,40,50,60]

// let i=0;
// let j=array.length-1;
// while(i<j){
//     let temp=array[i];
//     // console.log(temp);
//     array[i]=array[j]
//     array[j]=temp;
  
//     i++;
//     j--;
   

// }
// console.log(array);





// let array=[10,20,30,40,50,60,70,80];
// let i=0;
// let j=array.length-1;
// while(i<j){
//     let temp=array[i];
//     array[i]=array[j];
//     array[j]=temp;


//     i++;
//     j--;
// }
// console.log(array);
