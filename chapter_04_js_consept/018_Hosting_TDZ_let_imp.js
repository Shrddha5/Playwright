console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100; //bec of Let Hosting not work, give ReferenceError

//Hosting applicable for only var not for let and const

// TDZ=temporal dead zone, var Tdz= undefine, Let Tdz= ReferenceError
{
    // ---- TDZ for "score" starts here ----
    // console.log(score);  // ReferenceError!
    // score = 50;          // ReferenceError!
    // typeof score;        // ReferenceError!
    // ---- TDZ for "score" ends here ----
    let score = 100;        // Declaration reached, TDZ ends
    console.log(score);     // 100 (safe to access now)
}// TDZ is not for var  it is for let and const
