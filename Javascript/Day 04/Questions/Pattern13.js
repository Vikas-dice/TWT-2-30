
let nsp=0;
let nst=11;
for(let row=1;row<=11;row++){
    //space
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ")
    }
    //star
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")

    }
    // new line
    console.log();
    //update stars and space
    if(row<6){
        nsp=nsp+1;
        nst=nst-2;
    }else{
        nsp=nsp-1;
        nst=nst+2;
    }
}