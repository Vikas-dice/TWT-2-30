

class Parent{
    firstname="vikas";

    sayHelloToMe(){
        return "Hello"+" "+this.firstname;
    }
}

class Child extends Parent{
    firstname="puneet";

}

let child1= new Child();
console.log(child1.firstname);
