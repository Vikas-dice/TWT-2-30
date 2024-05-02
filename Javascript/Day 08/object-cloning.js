//1- spread opertor

let obj={
    name:"vikas",
    age:27,
    salary:10000,
}

// let obj2=obj1; //shallow copy - 

// let obj2={...obj};
// console.log(obj,obj2);
// obj.gendr="male";
// console.log(obj,obj2);

//2 traverse 

let obj2={};

// for(const key in obj){
//     obj2[key]=obj[key]
// }

// console.log("after",obj,obj2);
// obj.gender="male";
// console.log("after 2",obj,obj2);

//Object.assign()

// Object.assign(obj2,obj,{x:100,y:200});
// console.log("after 1",obj,obj2);
// obj.gender="male";
// console.log("after 2",obj,obj2);

//structurecloning 

// let newobj=structuredClone(obj);
// console.log("after ",newobj,obj);
// obj.gender="male";
// console.log("after 2",newobj,obj);

// let newobj=structuredClone(obj)
// console.log(newobj,obj);
// obj.gender="male";
// console.log(newobj,obj);



// let newobj =Object.assign(obj)
// console.log(newobj,obj);
// obj.gender="male";
// console.log(newobj,obj);


//deep copy and shalloow copy


let object1={
    1:10,
    2:20,
    3:30,
    4:40
}
let object2={}

Object.assign(object2,object1)
console.log(object1,object2);
object1.gender="male";
console.log(object1,object2); //merging

let object3=Object.assign(object1);
console.log(object3);
object1.percentage=75;
console.log(object1,object3);

object3.subject="maths";
console.log("----",object1,object3);

