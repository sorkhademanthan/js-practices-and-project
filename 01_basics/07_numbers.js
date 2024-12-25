// const score = 100;
// const name = "manthan"
// const percentage = 100.564
// console.log(score, typeof score);

// const balance = new Number(400);
// console.log(balance, typeof balance);

// console.log(score.toString().length)
// console.log(`the length of the string is ${name.length}`);
// console.log(percentage.toFixed(2))

// let num = 55.44;
// console.log(Math.trunc(num)) 

// console.log(Math.sqrt(55).toFixed(4))

// ********** MATHS ************
// console.log(Math.random().toFixed(1)*10 + 1)

// console.log(Math.floor(Math.random()*100) + 1);
// console.log(Math.floor(Math.random()*100) + 1);
// console.log(Math.floor(Math.random()*100) + 1);
// console.log(Math.floor(Math.random()*100) + 1);
// console.log(Math.floor(Math.random()*100) + 1);

let min = 10
let max = 20

console.log(Math.floor((Math.random()*(max-min +1)) + min))

//math.random gives value in 0. i.e 0.1,0.2,0.3,......
//math.floor gives the vale 0 as the floor value will be zero
//+1 or +min is to avoid the 0 value given by math.floor
//max - min to set the condition ie base case to get the value in between this range


//correct explanation

// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
// Multiplying by (max - min + 1) scales this to a range of [0, max - min + 1).
// Adding 'min' shifts the range to [min, max + 1), ensuring the numbers start at 'min'.
// Math.floor() rounds down the result to ensure it is an integer within [min, max].

