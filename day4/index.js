/*
function areafind(length,breadth){
 return length*breadth;
}
let length=prompt("enter length");
let breadth=prompt("enter breadth");
let area=areafind(length,breadth);
console.log(area);
*/
/*
function check(num){
    return num%2==0?"EVEN":"ODD";
}
let n=prompt("enter number");
let c=check(n);
console.log(c);
*/
/*
function check(){
   console.log("HI");
   return 0;
}
console.log(check());
*/
/*
var abc=[1,2,4,5]
function check(){
        var total=0;
        for(let i=0;i<abc.length;i++){
            total+=abc[i];
        }
        return total;
}

var s=check();
console.log(s);
*/

/*
var a="hi";
function check(){
    return typeof(a);
}
 var m=check();
 console.log(m);

*/

var a=[1,"hello",true];
function check(){
   for(let i=0;i<a.length;i++){
    a[i]=typeof(a[i])
   }
   return a;  
}

var m=check();
console.log(m)
if(typeof(m)=="object"){
    console.log("true");
}
else console.log("false");
