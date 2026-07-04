for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i);
}
//output is 0,2 because when i is 1, the continue statement will skip the rest of the loop body and move to the next iteration.