let a = 10;

// while (a < 10) {
//     console.log(a);
//     a++; 
//output is nothing because the condition is false, so the loop body will not execute
// }

do {
    console.log(a);
    a++;
} while (a < 10);
//output is 10 because the loop body will execute at least once, even if the condition is false
 
//do...while loop is similar to while loop, but the loop body will execute at least once, even if the condition is false. The condition is checked after the loop body is executed.

//diffrence bet for , whil, do while is that for and while loop check the condition before executing the loop body, while do...while loop checks the condition after executing the loop body.