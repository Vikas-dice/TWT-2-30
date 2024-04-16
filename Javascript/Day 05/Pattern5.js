
for(let row=1;row<=5;row++){
    for(let col=1;col<=9;col++){
        if(row==5 && col%2==1){
            process.stdout.write("*")

        }else{
            process.stdout.write(" ")

        }
        if(row+col==6 || 5+row==col+1 ){
           
            process.stdout.write("*")

        } else{
            process.stdout.write(" ")

        }
         
           
        
    }
    console.log();
}