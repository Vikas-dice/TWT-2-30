

// let num=78989;
// console.log(Math.floor(num/10));
// num=Math.floor(num/10)
// console.log(num);
// console.log(Math.floor(num/10));
// num=num%10;
// console.log(num);


//q1- num-digits

let num=897898;
let nod=0;

while(num>0){
    num=Math.floor(num/10);
    nod++;

}
console.log("no pof digits are ",nod);


