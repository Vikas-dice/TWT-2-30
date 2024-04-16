

//function - nod 

function NoOfDigits(num){
    let nod=0;
    while(num>0){
        num=Math.floor(num/10);
        nod++;
    }
    return nod;

}
let ans=NoOfDigits(781448);
let div =Math.pow(10,ans-1);
function Print(num2){
    while(num2>0){
        let fd=Math.floor(num2/div);
        console.log(fd);
        num2=num2%div;
        div=div/10;

    }
}

// // Print(7818);
// Print(781448);
function final(number){
    NoOfDigits(number)
    Print(number)
}
final(787878);
