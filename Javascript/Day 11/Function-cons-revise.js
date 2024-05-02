

function Testing(){
    console.log("hello world");
}

let t1= new Testing; //default cons = defuaklt method
let t2= new Testing();
console.log(t1==t2);


function employee(){
    this.firstname="vikas";
    this.lastname="chaudhary";
    this.age=27;
    this.salary=10000;
    this.task=function(){
        console.log("teaching");
    }

}

let emp1= new employee();
let emp2=new employee();
console.log(emp1);
console.log(emp2);
console.log(emp1==emp2);


function teacher(fname,lname,age,salary,task){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.salary=salary;
    this.task=task;

}

let teacher1= new teacher("vikas","chaudhary",27,10000,function(){console.log("teaching");})
let teacher2= new teacher("puneet","malik",28,10000,function(){
    console.log("ccns teacher");
})
console.log(teacher1);
console.log(teacher2);


function Greeting(){
    this.name="dice";
    this.age=40;
    this.fun=function(){
        return this.name+" "+this.age
    }
}
// console.log(this.getSelection);

let g1= new Greeting();
console.log(g1.fun());



//new.target

function KuchhBhi(){
    console.log(new.target);
}


let ans1=  KuchhBhi();
console.log(ans1);

function testtest(){


    return this;

}
let test1= new testtest();
console.log(test1);


//optional chaining 









