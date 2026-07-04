let num = prompt("Enter a number:");
//prompt() displays an input box in the browser.
//Whatever the user types is returned as a string.

num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
