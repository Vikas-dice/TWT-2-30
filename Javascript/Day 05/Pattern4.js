

for(let row=1;row<=6;row++){
    for(let col=1;col<=5;col++){
        if(row>1 && row<6 && col>1 && col<5){
            process.stdout.write(" ")
        }else{
            process.stdout.write("*")
        }
      
      
    }
    console.log();
}