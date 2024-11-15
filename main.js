
//1.

for (let i = 1;i <= 10;i++){
    console.log(i);
}
console.log("\n");
//2.

for (let i= 10; i >=1 ; i--){
    console.log(i);
}

//3.
console.log("\n");

let sum = 0; //assigning value to 0
// this for loop suming every number betwine 1 - 50 
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);//logging the result

console.log("\n");
//4. 5 iteration
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
console.log("\n");

//5. brake statements immeditly brakes out from loop for example this loop will brake when i === 3;
for (let i = 1;i <= 10;i++){
    if (i === 3){
        break;
    }
    console.log(i);
}
console.log("\n");

//6. continue statements skips iteratione example this loop will skip 3 ;
for (let i = 1;i <= 10;i++){
    if (i === 3){
        continue;
    }
    console.log(i);
}

console.log("\n");

//7. 

let number = 0;
let count = 0;
while(number !== 27){
    number = Math.floor(Math.random() * 101);
    console.log(number)
    count++
}
console.log("Generated number:", count);

console.log("\n");
//11
for(let i = 1; i <= 100;i++){
    if(i % 3 ===0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 ===0){
        console.log("Fizz");   
    }else if(i % 5 ===0){
        console.log("Buzz");
    }else{
        continue
    }

}
console.log("\n");
//12 
for (let i = 1; i <= 100; i++){
    console.log(Math.floor(Math.random()*101));

}
console.log("\n");
//13
/*
let s = 0;
for (let i = 1; i <= 100; i++){
    if (i % 2 === 1){
        s += i;
    }

}
console.log("sum of numbers:",s);

let s = 0;
for (let i = 1; i <= 100; i += 2) {
    s += i;
}
console.log("sum of numbers:",s);
*/

let s = 0;
for (let i = 1; i <= 1000; i++){
    if (i % 2 === 0){
        s += i;
    }

}
console.log("sum of numbers:",s);
console.log("\n");

//14
let t = 0;
for (let i = 1; i <= 1000; i++){
    if (i % 3 === 0 ||i % 5 === 0 ){
        t += i;
    }

}
console.log("sum of numbers:",t);
console.log("\n");
