

class Parent{
   firstname="vikas";
   lastname="chaudhary";


    getFullName(){
        return this.firstname+" "+this.lastname;
    }

    area(l,b){
        return l*b;
    }

    area(side){
        return side*side;
    }
}

let p1= new Parent();
console.log(p1);
console.log(p1.getFullName());
console.log("----------------");
console.log(p1.area(10));
console.log(p1.Area(5,6));


