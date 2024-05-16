// let response=fetch("https://restcountries.com/v3.1/all")


// // response.then((res)=>{
// //     console.log(res.json());
// // })


// response.then((res)=>{
//     // console.log(res);
//     return res;

// }).then((data)=>{
//     console.log(data.json());
// }).catch(error=>console.log(error))


//asycn await

async function getDataFromApi(){
    console.log("hello world inside function ");
    let response= await fetch("https://restcountries.com/v3.1/all")
    // console.log(response);
    let finaldata= await response.json();
    console.log("hello worlld after response .json ");
    console.log(finaldata);

    console.log("hello world after final data ");




}

getDataFromApi();