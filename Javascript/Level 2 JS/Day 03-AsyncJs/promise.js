

//syntax 

let mypromise=new Promise((resolve,reject)=>{
    // resolve();
    // reject();
    // resolve("ye lo chips")
    // reject("chips nahi h ")
    // resolve("chips hai ")
    reject("chips nahi hai ")
    reject("chips nahi hai ")
    reject("chips nahi hai ")

    // resolve("resolve 1")
    // resolve("resolve 2")
    // resolve("resolve 3")

})
console.log(mypromise);

//resolve - then-function
//reject- catch - fucntion


// mypromise.then(function(data){
//     console.log(data);
// })

// mypromise.catch(function(error){
//     console.log(error);
// })

// mypromise.then(data=>console.log(data))
// mypromise.catch(error=>console.log(error))

// mypromise.then(data=>console.log(data)).catch(error=>console.log(error))


mypromise.then(data=>console.log(data)).then(data=>console.log(data)).then(data=>console.log(data)).then(data=>console.log(data))
.catch(error=>console.log(error)).catch(error=>console.log(error)).catch(error=>console.log(error))