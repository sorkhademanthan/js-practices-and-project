let name = "manthan"
let fullName = "Sorkhade Manthan Sorkhade"
let age = 20

console.log(`My name is ${name} and I am ${age} years old.`);//template literals

//strings methods

console.log(name.__proto__);
console.log(name.charCodeAt(0))
console.log(name.concat(" ","sorkhade"));
console.log(name.includes("a"));
console.log(fullName.endsWith("Sorkhade"));
console.log(name.lastIndexOf("a"));
console.log(name.repeat(4))
console.log(fullName.replaceAll("Sorkhade","Sairaj"));
console.log(fullName.slice(0,5));
console.log(fullName.split(" ",));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log("     manthan sorkhade".trimLeft())
console.log(typeof age.toString())

for(const char of name){
    console.log(char,typeof char);
   
}

