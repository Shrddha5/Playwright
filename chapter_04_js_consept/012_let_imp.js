// let - Block Scoped
let a = 10; // we can give new value i.e. reassigned for let

let retryCount = 0; // o/p =0
retryCount = retryCount + 1;// o/p =1
retryCount = retryCount + 1;// o/p =2
console.log("Retry attempt:", retryCount); // o/p =2

//let retryCount = 5; //  in same block wecan reasignes value but out of block we can not 
//can not change value of let 

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

// ❌ SyntaxError: redeclaration not allowed

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

console.log(executionTime); //outside block // ReferenceError: executionTime is not defined

// {} - Block
// if(){}
// funcion name(){}


// let = loyal i.e. reassigned in block , outside block not reassigned
// var = varirable / triator i.e. reassigned in block , outside block  reassigned

