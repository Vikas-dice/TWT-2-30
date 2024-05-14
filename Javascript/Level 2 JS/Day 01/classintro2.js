

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

class Child extends Parent{
    constructor(fname,lname,age){
        super()
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
    }
}

let child1 = new Child("vikas","chaudhary",27);
console.log(child1);
