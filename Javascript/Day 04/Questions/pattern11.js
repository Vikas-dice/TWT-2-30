

// for(let row=1;row<=5;row++){
//     for(let col=1;col<=5;col++){
//         if(col==1 || col==5){
//             process.stdout.write("*\t")

//         }else{
//             if(row==col || row+col==6){
//                 process.stdout.write("*\t")
    
//             }else{
//                 process.stdout.write("\t")
//             }

//         }
      
        
//     }
//     console.log();

// }










for(let row=1;row<=5;row++){
    for(let col=1;col<=5;col++){
        if(col==1 || col==5){
            process.stdout.write("*\t")
        }else{
            if(row==col || row+col==6){
                process.stdout.write("*\t")
            }else{
                process.stdout.write("\t")
            }

        }
    }
    console.log();

}














