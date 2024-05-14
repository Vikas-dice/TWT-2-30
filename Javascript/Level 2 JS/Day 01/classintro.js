
// class Employee{
//     firstname="vikas";
//     lastname="chaudhary";
//     age=27;
//     constructor(){
//         console.log(" m ek baar chal gya ");

//     }
// }

// let emp1= new Employee();
// let emp2= new Employee();
// console.log(emp1);
// console.log(emp2);
// let emp3= new Employee();
// // console.log(emp1==emp2);




// class Employee{
//     firstname;
//     lastname;
//     age;
//     task;

//     constructor(fname,lname,age,task){
//         this.firstname=fname;
//         this.lastname=lname;
//         this.age=age;
//         this.task=task;
//     }
// }

// let emp1= new Employee("puneet","chaudhary",27,function(){
//     console.log(" IT");
// })
// let emp2= new Employee("jugal","pandey",22,function(){
//     console.log("office boy");
// })
// console.log(emp1);
// console.log(emp2);
// console.log(emp1.age);
// emp1.task();





class Human{
    legs;
    hands;
    eyes;
    constructor(l,h,e){
        this.legs=l;
        this.hands=h;
        this.eyes=e;
    }
}

let human1 = new Human("2","2","2");
console.log(human1);


// class Animal{
//     legs;
//     hands;
//     eyes;

//     constructor(l,h,e){
//         this.legs=l;
//         this.hands=h;
//         this.eyes=e;
//     }
// }

// let animal1 = new Animal("2","4","3");
// console.log(animal1);


class Animal extends Human{

}
let animal1 = new Animal("2","4","2");
let animal2 = new Animal("2","4","2")
console.log(animal2);
console.log(animal1);
