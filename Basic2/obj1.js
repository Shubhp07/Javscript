// singleton 
//when created with construnctor always singleton
//when created with literals not singleton
//Object.crete
const mySym = Symbol("Key1")


const jsUser = {
    name:"Shubham",
    "full name":"Shubham Patil",
    [mySym] : "myKey1",
    age:22,
    location:"Pune",
    mail:"sp5535258@gmail.com",

}

console.log(jsUser.age);
console.log(jsUser["mail"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.mail = "Shubham@mail.com"
// Object.freeze(jsUser)
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello World");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());











