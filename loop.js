// for printing values
let arr = [10,13,14,16,8]; //array literal
for(let val of arr){
    console.log(val);
}
for(let i in arr){
    console.log(i);
}
let string = "khushi ";
for(let str of string){
    console.log(str)
}
let obj = {
    x:10,
    y:19
}
console.log(obj.x)
//sparse
let spar = [10,20,24,,,,,9]
console.log(spar)
//accessing the element of array
console.log(arr[4])

// Bitwise operator
let a = 90;
console.log( (a <= 10 & 10 >= a))
console.log(a<=100 | 100<=a)

let ob = {x: 1, y: 2}
console.log("x" in ob);

let ar = [123, 45, 67];
console.log(1 in ar)
console.log(0 in ar)

//instance of operator

let d = new Date;
console.log(d instanceof Date)

let ar1 = [123,87]
console.log(ar1 instanceof Array)

// factorial by loop
let fact = 1;
let n = 5;
for(i=1; i<=n; i++){
    fact = fact*i;
    console.log(fact)
}
// Logical operator
let b = 4;
console.log(b<10 && 10>b);

let c = 5;
console.log(c<10 || 10<b);

// use nor operator
let m = 10;
console.log(!(m<10 && 10 > m));

// eval function
console.log(eval("5 + 9"));

// logical operator
let val = 30;
console.log(val >= 30 && 12 <= val);
console.log(val <= 23 || 50 > val)
console.log(!(val <= 23 || 50 > val))

// prompt input
// let data = prompt("enter your name: ")
// console.log(data)
// alert("your bank account is hacked")

// eval function
console.log(eval("3 + 5"))

// function
function fac(name){
    console.log(name)
}
fac("khushi")

// object formation
let obj1 = {x:10,"khushi":"mn"};
console.log(obj1.khushi);

// right shift & left shift
console.log(5<<3) // a X 2 power b
console.log(32>>2) // a / 2 power b

// statements
let str = "rinki";
if( str==null)
    str="khushi";
console.log(str)

let name1=null
if(!name1 ) name1="khushi";
console.log(name1)
    

// let age = prompt("enter your age:");
// if(age>=18)
//     console.log('you are eligible to vote')
// else
//     console.log("you are not eligible")

// let weeks = prompt("enter no: ")
// if(weeks==1){
//     console.log("Monday")
// }
// else if(weeks==2){
//     console.log("Tuesday")
// }
// else if(weeks==3){
//     console.log("Wednesday")
// }
// else if(weeks==4){
//     console.log("Thursdat")
// }
// else if(weeks==5){
//     console.log("Friday")
// }
// else if(weeks==6){
//     console.log("Saturday")
// }
// else if(weeks==7){
//     console.log("Sunday")
// }
// else {
//     console.log("no day")
// }

// switch 
// let Day=prompt("enter no: ")
// switch(Day){
//     case "1": console.log("Monday")
//     break;
//     case "2": console.log("Tuesday")
//     break;
//     case "3": console.log("Wednesday")
//     break;
//     case "4": console.log("thu")
//     break;
//     case "5": console.log("fri")
//     break;
//     case "6": console.log("sat")
//     break;
//     case "7": console.log("sun")
//     break;
//     default: console.log("no day")
//}

// while loop
let count = 1;
while(count <=10){
    console.log(count)
count++
}

// for loop
for(i=1;i<=5;i++){
    
    console.log(`${i}=hello world`)
}

// sum of n numbers by for loop
let val1= 1
for(i = 0; i<10;i++){
    val1 += i;

}
console.log(val1);

// table
let tb = 4;
for(i = 1; i<= 10;i++){
    let mul = tb * i;
    console.log(`${tb} X ${i} = ${mul}`);
}

// for of loop
let data = [12,34,5,7,9,8],sum=0
for(let val of data){
    sum += val
}
console.log(sum)

// to merge keys
let obj2 = {
    x : 1,
    y : 2,
    z : 3
}
let key = "";
let val3 = 0;
pairs = "";
for(let val of Object.keys(obj2)){
    key += val;
}
console.log(key)
for(let val of Object.values(obj2)){
    val3 += val;
}
console.log(val3)
for(let [key,val3] of Object.entries(obj2)){
    pairs += key + val3

}
console.log(pairs)


// for of with string
let freq = {};
for(let letter of "missisippi"){
    if(freq[letter])
        freq[letter]++;
    else
        freq[letter] = 1;
}
console.log(freq)