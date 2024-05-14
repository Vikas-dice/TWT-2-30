
class Parent{
    firstname="vikas";
    lastname="chaudhary";
    age=27;

    getFullname(){
        return this.firstname+" "+this.lastname;
    }

    sayHello(){
        return "good morning"
    }
   
}

class Child extends Parent{
 

    sayHello(){
        return "Good Night"
    }

   

 


}
let ch1 = new Child();
console.log(ch1.sayHello());
// console.log(ch1.printAgeFromParentClass());


