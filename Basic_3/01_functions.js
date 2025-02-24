function loginMessage(userName = "Sam"){
    if(!undefined){
        console.log("Please enter user name")
        return
    }
    return `${userName} just logged in`
}
// console.log(loginMessage("Shubham"))

function addPrice(...num1){
    return num1
}

console.log(addPrice(200,300,400));

const user={
    name:"Shubham",
    price:500
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.name} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    name : "Sam",
    price:500
})


const arr1 = [20,400,200,500]

function returnValue(getArray){
    return getArray[1]
}

console.log(returnValue(arr1));
