

let num=789800;
//nod
// let temp=num;
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}
// console.log("-----",num);
//div

let div=Math.pow(10,nod-1);
// console.log(div);


while(div!=0){
    let fd=Math.floor(num/div);
    console.log(fd);
  
   
    num=num%div;
   
    div=Math.floor(div/10);
    


}


















/*
7898/1000=7
print 7
898
7898%1000=898
898/100=8
print 8
898%100=98
98/10=9
print 9

10m ki power nod-1=


*/ 