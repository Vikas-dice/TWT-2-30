function employee(firstname,lastname,age, salary, task){
    this.pehlanaam=firstname;
    this.aakhirinaam=lastname;
    this.umar=age;
    this.tankhuwa=salary;
    this.kaam=task;

}

let employee1=new employee("vikas","chaudhary",27,10000,function task(){console.log("teaching");})
console.log(employee1);
console.log(employee1);
let emp2= new employee("jugal","pandey",22,5000,function(){console.log("office work");})
console.log(emp2);



