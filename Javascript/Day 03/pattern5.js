let nsp=3;
let nst=1;

for(let row=1;row<5;row++){
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

    //update
    nsp=nsp-1;
    nst=nst+2;

}
