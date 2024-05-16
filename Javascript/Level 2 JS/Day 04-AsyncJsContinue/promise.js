

// let mypromise = new Promise((resolve , reject)=>{

//     resolve("resolved promise")
//     reject("rejected promise")

// })


// mypromise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
console.log("hello world");
let mypromise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
           

        },4000)




})

let p=mypromise1.then(()=>{
    console.log("test 1");
})

console.log("-------",p);
let mypromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
       

    },3000)




})

mypromise2.then(()=>{
console.log("test 2");
})

let mypromise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
       

    },5000)




})

mypromise3.then(()=>{
console.log("test 3");
})

console.log("promise ends");
for(let i=0;i<20;i++){
    console.log(i);
}