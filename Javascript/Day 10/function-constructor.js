//function cons - es5
//class -

// let diceemployee1={
//     name:"vikas",
//     profession:"teacher",
//     salary:10000,
//     age:27,
//     doj:"10 dec , 2023",
//     task:function(){
//         console.log("teaching");
//     }
// }




function Employee(name,age, salary, profession, task,doj){
    this.name=name;
    this.age=age;
  
    this.salary=salary;
    this.profession=profession;
    this.task=task;
    this.doj=doj;


}
let employee1= new Employee("vikas",27,10000,"teacher",function task(){
    console.log("teaching");
},"10dec2023");
console.log(employee1);
let employee2=new Employee("jugal",22,5000,"office boy",function task(){
    console.log("office serve");
},"10jan2024");
console.log(employee2);

console.log(employee1.task());




