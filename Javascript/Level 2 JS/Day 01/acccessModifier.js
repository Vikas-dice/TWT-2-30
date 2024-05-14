
class Parent{
    firstname;
    lastname;
    age;

    constructor(fname,lname,age){
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
    }
}

let p1= new Parent("vikas","chaudhary",27);
console.log(p1);
console.log(p1.firstname);
console.log(p1.age);
// console.log(p1.lastname);
console.log(p1.lastname);

class Child extends Parent{
    
}

// let c1 = new Child("rahul","pandey",22);
// let p1= new Parent("parek","malik",24);
// console.log(c1.age);
// console.log(c1.firstname
// );
// console.log(c1.lastname);
// console.log(p1.age);
// console.log(p1.firstname);
// console.log(p1.lastname);




