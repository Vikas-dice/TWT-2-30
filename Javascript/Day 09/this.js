//this keyword - 
//case 1 - object - this -bind ,current context

let obj={
    name:"vikas",
    age:27,
    salary:10000,
    address:"delhi",
    fun:function(){
        console.log(this.age);
        console.log(this.address);
        console.log(this.name);
    }
}

console.log(obj.fun());
//case 2 - global m this access - window object


console.log(this); //windown object


function fun(){
    console.log(this);
}

fun();


// csse 4 - fat arrow function

let fun2=()=>{
    console.log(this);
}

fun2();

//case 5 - object - fucntion - method


let object={
    name:"vikas",
    age:27,
    salary:10000,
    gender:"male",
    fun:function (){
        console.log(this);
    }
}

object.fun();

//case 6 - object - function -es6 -fat arrow - this

let object2={
    name:"puneet",
    age:28,
    salary:10000,
    gender:"male",
    fun:(fname,lname)=>{
        console.log(this);
        console.log(fname+" "+lname);
    }
}

object2.fun("vikas","chaudhary");


//case special case 

let object3={
    name:"sukanya",
    age:19,
    salary:undefined,
    fun:function parent(){
        let child=()=>{
            console.log(this);

        }
        child();
    }
}

object3.fun();

let object4={
    name:"harsh",
    age:20,
    gender:"male",
    fun:()=>{
        let gun= ()=>{
            console.log(this);
        }
        gun();
    }
}

object4.fun();







