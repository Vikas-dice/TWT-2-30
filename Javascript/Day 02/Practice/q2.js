/*
marks <=90 grade excellent
marks 75> and<90 very good
marks 60>aND <75 good
marks 45> and <60 fair
marks == 40 just pass
fail

 


*/

let marks=62;
if(marks>=90){
    console.log("excellent");
}else if(marks>75 && marks<90){ //false && true false
    console.log("very good");
}else if(marks>60 && marks<75){
    console.log("good");
}else if(marks>45 && marks<60){
    console.log("fair");
}else if(marks==40){
    console.log("just pass");
}else{
    console.log("fail- come to dice ");
}


