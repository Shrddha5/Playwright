// JS Engine
// LINE BY LINE, , JIT Compilation

console.log(greeting); //undefined (privously not having value and now also not)bec v8 engin know variablewill use
var greeting = "Hello";
console.log(greeting);// Hello

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(a);
var a = "shraddha";
console.log(a);