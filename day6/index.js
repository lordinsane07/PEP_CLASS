let arr=[1,2,3,4]

let change=arr.map((see,i)=>see*10)
console.log(change)    
 
    
 let check=["hello","hi","see"]
 let uppstrs=check.map(str=>str.toUpperCase());
 console.log(uppstrs)
 
 /*
let arr=[
    {
       name:"Mrittick Deb",
       subject:"Software Developer",
       age:20,
       city:"Siliguri"
    },
    {
         name:"ABC",
       subject:"Manager",
       age:25,
       city:"Siliguri"
    }];
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].name)
        console.log(arr[i].age)
    }
    
    */



  let brr=[1,2,3,4]
  let f=brr.map((brr1,i)=>brr1+10)
  console.log(f)
    


let arr=["1","2","3","4"]
let brr=arr.map((arr1,i)=>Number(arr1))
console.log(brr)


let arr=[1,2,3,4]
let brr=arr.map((arr1,i)=>(arr1%2==0)?"Even":"Odd")
console.log(brr)


let arr=[1,2,3,3,5,"Hi","Hello","Hi",1,2]
let freq={}
function check(){
        for(let num of arr){
           freq[num]=(freq[num] || 0)+1 
        }
        console.log(freq)
}
check()


let arr=["hello world","good day"]

let brr=arr.map(
 strr=>{
        return strr.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join("");
})
console.log(brr);    


let arr=["apple","banana","mango"];

function check(){
    let brr=arr.map(
        word=>word[0].toUpperCase()+word.slice(1)
        ) 
        console.log(brr)
}

check()

    
let arr=[1,2,3,4,5,6]
let res=arr.filter(check);
function check(ar){
    return ar%2==0;
}
console.log(res)
    

let arr=["","hi","hello","","bye"]

let res=arr.filter(check);
function check(ar){
    if(ar.length!=0) return arr;
}
console.log(res)
    

let users=[{ name:"A",age:16},
    {name:"B",age:17},
    {name:"C",age:18},
    {name:"D",age:19}]
    
let res=users.filter(check);
function check(ar){
    if(ar.age>=18) return ar;
}
console.log(res)



let arr=[1,2,3]
let products=arr.reduce((accumulator,currentval)=>accumulator*currentval,1)

console.log(products)



let arr=["apple","banana","apple","orange","banana","apple"]
let arr2=arr.reduce((acc,curr)=>{
    acc[curr]=(acc[curr] || 0) +1;
    return acc;
},{})


console.log(arr2)


let arr=[1,2,3,4,5];
let arr2=arr.reduce((acc,curr)=>{
    if(curr%2==0){
        acc.even.push(curr)
    }
    else{
        acc.odd.push(curr)
    }
    return acc
},
{
    even:[],
    odd:[]
}
)
