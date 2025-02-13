const arr1  = ["thor" , "ironman" , "SpiderMan"]
 
const arr2 = ["batman" , "superMan" , "flash" ]

//  const newArr =  arr1.concat(arr2);
// console.log(newArr);

const newArr = [...arr1,...arr2]
console.log(newArr);

const newArr2 = [1,2,3,4,5,[4,3,2],5,[2,3,4,[7,8]]]

const anotherArr = newArr2.flat(Infinity)

// console.log(anotherArr);

// console.log(Array.isArray("Shubham"));

// console.log(Array.from("Shubham"));

// console.log(Array.from({name:"SHubham"}));

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));

function doube (number){
    return number*2;
}

const number = [2,3,4,5]
const op = number.map(doube);
console.log(op);

console.log(number);


function isLong(city){
    return city.length > 5
}

const city = ["Pune" , "KOlhapur" , "Satara" , "Sangli"]
const op1 = city.filter(isLong)
console.log(op1);
console.log(city);




const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities = data.split(",");
cities;
cities.length;
cities[0]; 
cities[1]; 
cities[cities.length - 1]; 

data.toString();
console.log(typeof data);









 



