let i = 0;
do {
    console.log(i);
    i--;
} while (i > 0);
//output is 0 because the loop body will execute at least once, even if the condition is false. The condition is checked after the loop body is executed.