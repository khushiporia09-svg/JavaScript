console.log("hello world");
let marks = 90;
console.log(marks);

console.log(0xa);
console.log(15*16 + 15);
console.log(Math.pow(2,3))
console.log(Math.round(.4))
console.log(Math.floor(1.9))
console.log(Math.abs(-15))
console.log(Math.random()) // from 0-1
console.log(Math.sqrt(9))
console.log(1/0)
console.log(-2/0)
console.log(Number.isSafeInteger(34))
console.log(Number.parseFloat(4));


let D = Date.now;
let now = new Date();
console.log(now);
let str = " hello everyone!";
let str2 = "khushi"
console.log(str)
console.log(str ,str2)
console.log(str.length);

// string functions of indexes
console.log(str.indexOf("l"))
console.log(str.indexOf("l",3));
console.log(str.indexOf("pp"));
console.log(str.lastIndexOf("l"));

// boolean functions
console.log(str.startsWith("h"))
console.log(str.endsWith("!"));
console.log(str.includes("max"));

// create and modify
console.log(str.replace("h","H"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
// console.log(str.normalize(""))

// inspecting individual character
console.log(str.charAt(7));
console.log(str.charAt(str.length-1));

// Padding functions
console.log("x".padStart(4))
console.log("x".padEnd(4))
console.log("x".padStart(4., "*"))
console.log("x".padEnd(4, ")"))

// space function
console.log("    Max   ".trim())
console.log("    Max - ".trimStart())
console.log("    Max  ".trimEnd())


//miscllaneous function
console.log("&".repeat(4))
console.log(String.prototype)
console.log(Number.prototype)
console.log(7.5*4)
console.log("7"*"5")
console.log("7"+5)
console.log("7"-"5")
console.log("7"/"5")