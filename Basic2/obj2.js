const myApp = new Object() //singleton Object
const myApp1  = {} //non singleton object

myApp.id = "123abc"
myApp.name= "Shubham"


const newUser = {
    mail:"user@gmail.com",
    fullName :{
        userFullName :{
            firstName : "SHubham",
            lastName : "Patil"
        }
    }
}

//console.log(newUser.fullName?.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 =  Object.assign({},obj1,obj2)
// console.log(obj3);

// const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users ={

}

console.log(newUser);

console.log(Object.keys(newUser));
console.log(Object.values(newUser));
console.log(newUser.hasOwnProperty("firstName:"));











