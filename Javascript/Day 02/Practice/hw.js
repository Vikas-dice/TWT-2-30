/*


7898
7
8
9
8


hint 7898%1000=898
7989/1000=7.898=7 print
1000- 100
7898=898
898%100=98
898/100=8.98=8 print


*/


let num=78988;
let temp=num;


let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod=nod+1;
}

let div=Math.pow(10,nod-1)
while(div>0){
    let fd=Math.floor(num/div);
    console.log(fd);
    num=num%div;
    div=Math.floor(div/10);
 



}



