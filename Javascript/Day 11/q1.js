//q1- string reverse 

let str="vikas chaudhary dice academy";
let spilttedstr= str.split(" ");
console.log(spilttedstr);
let i=0;
let j =spilttedstr.length-1;
while(i<=j){
    let temp=spilttedstr[i];
    spilttedstr[i]=spilttedstr[j]
    spilttedstr[j]=temp;

    i++;
    j--;


}
console.log(spilttedstr);

//hw 

// let str2="vikas chaudhary delhi";
// let arr=str2.split(" ");
// for(let i=0;i<arr.length;i++){
//     let ans=arr[i];
//     // console.log(ans);
// let start=0;
// let end =ans.length-1;
// console.log("length is ",ans.length);
// while(start<=end){
//     let temp=ans[start];
//     ans[start]=ans[end]
//     ans[end]=temp;
//     start++;
//     end--;
   
// }
// arr[i] = ans.join(''); // join the array back into a string
// console.log(arr[i]);


// }


let str2 = "vikas chaudhary delhi";
let arr = str2.split(" ");
for (let i = 0; i < arr.length; i++) {
    let ans = arr[i].split(''); 
    console.log(ans);// convert the word to an array of characters
    let start = 0;
    let end = ans.length - 1;
    // console.log("length is ", ans.length);
    while (start <= end) {
        let temp = ans[start];
        ans[start] = ans[end];
        ans[end] = temp;
        start++;
        end--;

    }
    arr[i] = ans.join(''); // join the array back into a string
    console.log(arr[i]);
}
