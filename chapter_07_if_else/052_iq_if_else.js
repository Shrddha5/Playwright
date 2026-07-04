// Truthy values in JavaScript
// if ("hello") console.log("String is truthy"); // // "hello" = truthy
// if (42) console.log("Number is truthy");
// if ({}) console.log("Empty object is truthy!");
// if ([]) console.log("Empty array is truthy!");


// Falsy values in JavaScript imp
// if ("") console.log("Won't print");
// if (null) console.log("Won't print");
// if (undefined) console.log("Won't print");
// if (NaN) console.log("Won't print");
// if (0) console.log("Won't print");

// ANY NUMBER = 1,2,,3,34,32,2,- TRUTH
// 0= FALSE

let name = 0;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye"); // bye print because name is 0 which is falsy
}