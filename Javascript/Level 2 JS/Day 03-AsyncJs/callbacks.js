

// let arr=[10,20,30,40,50]
// arr.forEach(function(maal){
//     console.log(maal);
// })


// function testing(age){
//     console.log(age);
// }

// testing(22);




// function testing(callback){
//     callback();

// }

// testing(function(){
//     console.log("i am a call back function");
// })


function testing(callback){
    callback();

}

testing(()=>{
    console.log("test 1");
    testing(()=>{
        console.log("test 2");

        testing(()=>{
            console.log("test 3");
            testing(()=>{
                console.log("test 4");

                testing(()=>{
                    console.log("test 5");

                    testing(()=>{
                        console.log("test 6");

                        testing(()=>{
                            console.log("test 7");
                        })
                    })
                })
            })
        })
    })
})