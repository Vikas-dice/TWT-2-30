//string - seq of chars
//char jr hf rue 3ikrrv/.   , ,.;'[[[[]]]]




//mutable and immutable


let arr=[10,20,30,40,50];
arr[1]=100;
arr[3]=200;
console.log(arr);



let name='vikas chaudhary'
name[2]='z';
name[6]='y';
console.log(name);


//inbuilt methods
//1- length
console.log(name.length);
//charat
console.log(name.charAt(8));
//indexof
console.log(name.indexOf('a'));
//starswith - true false
console.log(name.startsWith(" "));

//endswith
console.log(name.endsWith("ry"));
console.log(name.endsWith(" "));

//SUBSTRING , SUBSTR , SLICE

//Substring - 2 params - 2 index - 1st index - inclusive m 2md index - exclusive

console.log(name.substring(2,9));
console.log(name.substring(3));
console.log(name.substring(9,2));
console.log(name.substring(-4,-8));


//substr- 2 parm - inclusive
console.log(name.substr(2,8));
console.log(name.substr(5));
console.log(name.substr(2,name.length-1-1));





let str="vikas";
console.log(str.substr(1,str.length-1-1));
console.log(str.substr(-4,-1));

//slice hw

//split

let str2="vik7as ch7audh7ary dic7e ac7dem7y";
console.log(str2.split("7"));





