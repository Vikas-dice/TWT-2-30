function OddEvenCount(num){
    let oddcount=0;
    let evencount=0;

    while(num>0){
        let n=num%10;
        if(n%2==0){
            evencount++;
        }else{
            oddcount++;
        }
        num=Math.floor(num/10);
    }
    return [oddcount,evencount];

}

let ans=OddEvenCount(786536478)
console.log(ans);
