let bb=[1,2]
function check(){
    if(Array.isArray(b)) return "Array"
     else if(b && typeof(b)=="object") return "object"
        else if (typeof b==="object") return "Null"
        else return typeof(b)
}

console.log(check())


let a=20
console.log(a)
let b=a
console.log(b)
b=30
console.log(b)
console.log(a)

let arr=[1,2,3,4,5]
let arr1=arr
console.log(arr)
console.log(arr1)
arr1.push(10)
console.log(arr1)
console.log(arr)



function greet(name){
    return `Greeting from ${name}`
}
console.log(greet("Mrittick"))


let g=(name)=>{
    return `Greeting from ${name}`
}


console.log(g("Mrittick"))


let  k=[1,2,3,4,5,6]
let m=[]
function c(){
    for(let i=0;i<k.length;i++){
        if(k[i]%2==0) m.push(k[i])
        else continue;
    }
    return;
}
l=c()
for(let i=0;i<m.length;i++){
        console.log(m[i])
    }



let user={
    firstname:"Mrittick",
    lastname:"Deb"
};

let {firstname,lastname}=user
console.log(`${firstname} ${lastname}`)


let nums=[1,2,3,4]
let nums1=[6,7,8]
let array=[...nums,...nums1]
arr3=[5,6,7]
let [one,two,three]=arr3
console.log(array)
console.log(one,two,three)





let person={
    name:"Mrittick",
    age:20,
    city:"Siliguri",
    profile:[{designation:"software engineer",degree:"B.Tech"},{role:"Frontend developer"}]
}
    let {profile}=person
    let [obj1,obj2]=profile
    let {designation,degree}=obj1
    
    console.log(degree)
   // let ma=person.profile[0].degree
    //console.log(ma)


const user1={
    id:339,
    name:"Mrittick Deb",
    age:20,
    subjects:["HTML","CSS","JavaScript"],
    education:{
        degree:{
            name:"BCA",
        },
    },
};
let {education}=user1
let {degree}=education
let {name}=degree
console.log(name)
//console.log(user1.education.degree.name)




let user={
    firstname:"Mrittick",
    lastname:"Deb",
    age:20,
    posts: [
        {title:"Posts 1 ",comments:10},
        {title:"Posts 2 ",comments:1}
        ],
};

let {posts}=user
let [obj1,obj2]=posts
let {title,comments}=obj1
console.log(comments)

for(let i in user1){
    console.log(`${i} : ${user1[i]}`)
}





let arr=[1,2,3]
function destructionarray(arr){
    const [first,second,last]=arr
    console.log(first,last)
}

destructionarray(arr)



function Greet(name,...rest){
        return `Hi, I am ${name} and my hobbies are ${rest}`
}
let ans=Greet("Mrittick","cricket","music","and","football")

console.log(ans)



let obj1={
    name:"Mrittick Deb",
    age:20,
    city:"Siliguri"
};
 let {age,...others}=obj1
 console.log(others)



 const person={
    name:"Mrittick",
    address:{
        city:"New york",
        street:"123 Main St",
    }
};
console.log(person?.address?.city) //optional chaiaing

const person={
    name:"Mrittick",
    address:{
        city:"New york",
        street:"123 Main St",
    }
    ,age:20
};
function check(){
    let v=person?.age ?? 0;
    console.log(v)
}
check()


const product={
    productname:"CAKE",
    price:4500
}
let v=product?.price??-1;
if(v>0) console.log(v*90/100)
else console.log("empty")


let b=[1,2,3,4]
let removed=b.splice(2,2,0,0);
console.log(b)

function Higherorder(){
    console.log("hi from the function")
}


function foo(Higherorder){
    return Higherorder()
}

foo(Higherorder)



let arr=[1,2,3,4,5]
arr.forEach((element,index,array) => {
    console.log(array)    
})






















