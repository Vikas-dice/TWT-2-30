

// let fun =()=>{
//     console.log(this);
// }

// fun();


let object={
    name:"vikas",
    age:27,
    ismarried:false,
    fun:function (){
        console.log(this);
        let gun= ()=>{
            console.log(this);
        }
        gun();

    }
}

object.fun();


