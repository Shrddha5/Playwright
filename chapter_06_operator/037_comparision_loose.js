console.log(0 == "");//ans true // == is a lose check operator, it will check only the value not the data type
console.log(0 === "");//ans false // === is a strict check operator, it will check both the value and data type
console.log(0 == "0");//ans true    // 0 is converted to "0" and then compared, so it returns true
console.log(0 === "0");//ans false  // 0 is a number and "0" is a string, so they are not strictly equal    
console.log("" == "0"); impppppppppp //ans false // both are string but value is different
console.log("" === "0"); //ans false // both are string but value is different


console.log(0 == false);
console.log(null == 0);
console.log(null == undefined);
console.log(null === undefined);