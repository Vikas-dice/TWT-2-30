
// let nsp=2
// let nst=1;
// for(let row=1;row<=5;row++){
//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         if(row==3){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")

//         }
      
//     }
//     //star
//     for(let st=1;st<=nst;st++){
      
//         process.stdout.write("*")

//     }
//     //new line
//     console.log();
//     //update stars
   
//     if(row<3){
//         nst=nst+1;
//     }else{
//         nst=nst-1;
//     }
// }



let nsp=2;
let nst=1;
for(let row=1;row<=5;row++){
    //space
    for(let sp=1;sp<=nsp;sp++){
        if(row==3){
            process.stdout.write("*")

        }else{
            process.stdout.write(" ")

        }
       
    }
    //stars
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")

    }
    //new line
    console.log();
    //update stars
    if(row<3){
        nst=nst+1;
    }else{
        nst=nst-1;
    }
}