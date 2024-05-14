// class Parent{
 

//     constructor(fname,lname,age){
//         this.firstname=fname;
//         this.lastname=lname;
//         this.age=age;
//     }
// }

// class Child extends Parent{

//     constructor(fname,lname,age){
//         super(fname,lname,age)
//         // this.firstname=fname;
//         // this.lastname=lname;
//         // this.age=age;
//     }
//     printAgeOfParentClass(){
      
        
//         console.log(super.age);
//         return super.age;
//     }

// }

// let ch1 = new Child("vikas","chaudhary",27);
// console.log(ch1);
// console.log(ch1.printAgeOfParentClass());
// let ans =ch1.printAgeOfParentClass();
// console.log("ans is ===",ans);



class Parent {
    constructor(fname, lname, age) {
        this.firstname = fname;
        this.lastname = lname;
        this.age = age;
    }
}

class Child extends Parent {
    constructor(fname, lname, age) {
        super(fname, lname, age); // Call the constructor of the parent class with arguments
    }

    printAgeOfParentClass() {
        console.log(super.firstname); // Access superclass property inside a method
    }
}

let ch1 = new Child("vikas", "chaudhary", 27);
console.log(ch1);
ch1.printAgeOfParentClass();
