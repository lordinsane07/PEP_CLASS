let firstname="Mrittick";
let lastname="Deb";
let fullname=`${firstname} ${lastname}`;
console.log(fullname);

let arr=[1,2,3,"mrittick",null,Boolean,{name:"Mrittick"}];
console.log(arr)
arr.push(50)
console.log(arr)
arr.pop();
console.log(arr)


let result=arr.unshift("hi");
console.log(result)
console.log(arr)


/*
let value=20;
let res=arr.shift();
console.log(res)
console.log(arr)

console.log(arr.includes(2))

let vl=arr.slice(5,6)
console.log(vl)

let check=arr.splice(1,2)
console.log(arr[10])//array outof n index access lelads to undefined

*/

let object={
    name:"Mrittick",
    email:"debmrittick@gmail.com",
    age:20,
    city:"Siliguri"
};
console.log(object,typeof object);
console.log(object.city)

object.email="md@gmail.com"
console.log(object)

object["skill"]="coding";
console.log(object)
delete object.skill
console.log(object)


//reacto=>reading,explanation,approach,code,time complexity,optimization



/*

var b=[4,1,5,2]
function check(){
    let max=-1;
        for(let a=0;a<b.length;a++){
                if(b[a]>max){
                    max=b[a];
                }
        }
        return max;
}
console.log(check())
*/
/*
let a;
console.log(a,typeof a);
let b=null;// this being a primitve dtaaytpe is return object whihc is a mistake by javascript 
console.log(b,typeof b);

let obj={name:"mrittick"};

console.log(obj,typeof obj);

//there are 6 falsey values in js
//1. null,undefined,"",false,NaN,0
console.log(!null);

console.log(Boolean("")) 
*/
/*
var p;
if(typeof(p)=="undefined"){
    console.log("true");
}
else console.log("false");

//write a js func htat checksif avaribaleis undefined.the function should return true if var is undefinedotherwise false;

*/
/*
var val={
    name:"Mrittick"
}
function c(value){
    if(value && typeof value==="object"){
        console.log("this is an object")
    }
    else {
        console.log("this is not a object")
    }
}

let newval=c(val);
console.log(newval);
*/
/*
let ans=5<3;
console.log(ans,"is an expression")
*/
var a=null;

function see(){
        if(a==="null") console.log("true");
        else console.log("false");        
}
console.log(see())
















