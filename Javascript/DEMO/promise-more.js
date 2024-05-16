

let promise1 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("promise 1")
        
    }, 4000);

})
promise1.then(data=>console.log(data))

let promise3 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("promise 3")
        
    }, 3000);

})
promise3.then(data=>console.log(data))

let promise2 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("promise2")
        
    }, 1000);

})
promise2.then(data=>console.log(data))


console.log("after promise");

for(let i=1;i<=100;i++){
    console.log(i);
}

//solution to callback hell

// let mypromise = new Promise((resolve,reject)=>{
//     resolve("promise")
// })

// mypromise.then(()=>{
//     console.log("test 1");
// }).then(()=>{
//     console.log("test 2");
// }).then(()=>{
//     console.log("test 3");
// }).then(()=>{
//     console.log("test 4");
// }).then(()=>{
//     console.log("test 5");
// }).then(()=>{
//     console.log("test 6");
// })


//data send from one then to another then

// let mypromise = new Promise((resolve,reject)=>{
//     resolve("promise")
// })

// mypromise.then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data);
//     return data;
// })

//mupltple catch
let mypromise = new Promise((resolve,reject)=>{
    // resolve("promise")
    reject("rejected promise ")
})

mypromise.catch((error)=>{
    console.log(error);
    // throw new Error("rejected once again")
    // return "testingerror"
    
}).catch((error)=>{
    console.log(error);
    
}).catch((error)=>{
    console.log(error);
}).catch((error)=>{
    console.log(error);
}).catch((error)=>{
    console.log(error);
}).catch((error)=>{
    console.log(error);
})