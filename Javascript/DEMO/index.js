// function Testing(){
//     console.log(" hello world");
// }

// let ans= new Testing();
// console.log(ans);

/**
 * optional chaining 
 * cons mode test new.target
 * the non existance props
 * short circuiting 
 * other varient ?.() ?.[]
 * 
 * 
 * 
 */


// function Testing(){
//     console.log(this);
// }
// let t = new Testing();
// console.log(t);
// let t1= new Testing();
// console.log(t===t1);


// function Testing(){
//     this.firstname="vikas";
//     this.lastname="chaudhary";
//     this.age=27;
//     this.tash=function(){
//         console.log(" ia m functions");
//     }
// }

// let obj1= new Testing();
// let obj2= new Testing();
// console.log(obj1);
// console.log(obj2);
// console.log(obj1===obj2);

// function test(){
//     console.log(new.target);
// }
// let tt= new test;
// console.log(tt);


//optional chaining 

let object={
    // firstname:"vikaas",
    // lastname:"chaudhary",

    name1:{
        fname:"vikas",
        lname:"chaudhary"

    },
    nums1:[10,20,30],
    testing1:function(){
        console.log("test test");
        return "parekh";
    }

}
console.log(object.name1);

console.log(object.name?.fname);
console.log(object.lastname);
console.log("ifhihfeiu");

//array
// console.log(object.nums?.[0]);
//function
console.log(object.testing?.());


/**
 * symbol
 */

let sym=Symbol("id");
console.log(sym.description);
let object2={
    sym:10,

}
