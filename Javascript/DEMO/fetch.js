//fethc api 
//restcountries 
let response =fetch("https://restcountries.com/v3.1/all")

response.then((res)=>{
 return res.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})