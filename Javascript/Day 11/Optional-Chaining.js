

let object={
    name:{
        firstname:"vikas",
        lastname:"chaudhary",
    },
    nums:[10,20,30],
    fun:function(){
        console.log("hello dunia");
        return "dice academy";
    }
    

    }

   
console.log(object.name);
console.log(object.name?.firstname); //undefined.firstname
console.log(object.name?.lastname);
console.log(object.nums?.[0]);
console.log(object.fun?.());
console.log("hello world");


//array
//functions 

// function(){}

let arr=[{a:10,b:10},a,[1,2,3]];
console.log(arr);


// console.log()




