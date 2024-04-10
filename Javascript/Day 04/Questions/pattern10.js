//pattern 1 = left to right diagonal

// let nsp=0;
// for(let row=1;row<=5;row++){
//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }

//     //one star
//     process.stdout.write("*")
//     //new line
//     console.log();
//     //updaate space
//     nsp=nsp+1;
// }

//pattern 2
// let nsp=4;
// for(let row=1;row<=5;row++){
//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }
//     //one star
//     process.stdout.write("*")
//     //new line
//     console.log();
//     //space update
//     nsp=nsp-1;
// }

for(let row=1;row<=5;row++){
    for(let col=1;col<=5;col++){
        if(row==col || row+col==6){
            process.stdout.write("*")

        }else{
            process.stdout.write(" ")
        }

        // if(row==col){
        //     process.stdout.write("*")

        // }else{
        //     process.stdout.write(" ")

        // }
       
    }
    console.log();
}