javascript is interpreted language 

# let and const
diffrence between let and const is that let value can be changed but const value cant be changed
const is used when we dont want to change the value of variable

# Data types
1. Number
2. String
3. Boolean
**syntax**
```javascript
let num = 10;
let str = "hello";
let bool = true;
```
# Operators
1. Arithmetic operators : +, -, *, /, %, ++, --
2. Assignment operators : =, +=, -=, *=, /=, %=
3. Comparison operators : ==, !=, >, <, >=, <=
4. Logical operators : &&, ||, !
5. Bitwise operators : &, |, ~, ^, <<, >>

# Conditional statements
1. if-else  
**syntax**
```javascript
if(condition){
    //code
}
else{
    //code
}
```
2. switch
**syntax**
```javascript
switch(expression){
    case 1:
        //code
        break;
    case 2:
        //code
        break;
    default:
        //code
}
```

# Loops
1. for loop
**syntax**
```javascript
for(let i=0;i<10;i++){
    console.log(i);
}
```
output : 0 1 2 3 4 5 6 7 8 9

2. while loop
**syntax**
```javascript
let i=0;
while(i<10){
    console.log(i);
    i++;
}
```
output : 0 1 2 3 4 5 6 7 8 9

# Functions
**syntax**
```javascript
function functionName(){
    //code
}
```
## callback function
```javascript
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function calculator(a,b,callback){
    return callback(a,b);
}
console.log(calculator(10,20,add));
console.log(calculator(10,20,sub));
console.log(calculator(10,20,mul));
console.log(calculator(10,20,div));
```
output : 30 -10 200 0.5

# Arrays
**syntax**
```javascript
let arr = [1,2,3,4,5];
```
## Array methods
1. push() : add element at the end of array
```javascript
let arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);
```
output : [1,2,3,4,5,6]

2. pop() : remove element from the end of array
```javascript
let arr = [1,2,3,4,5];
arr.pop();
console.log(arr);
```
output : [1,2,3,4]

3. unshift() : add element at the start of array
```javascript
let arr = [1,2,3,4,5];
arr.unshift(0);
console.log(arr);
```
4. shift() : remove element from the start of array
```javascript
let arr = [1,2,3,4,5];
arr.shift();
console.log(arr);
```
output : [2,3,4,5]


5. concat() : merge two arrays
```javascript
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
console.log(arr1.concat(arr2));
```
output : [1,2,3,4,5,6,7,8,9,10]
6. forEach() : iterate over array
```javascript
function logthing(element){
    console.log(element);
}
let arr = [1,2,3,4,5];
arr.forEach(logthing);
```
output : 1 2 3 4 5

### access elements of array and changing value of elements
```javascript
let arr = [1,2,3,4,5];
console.log(arr[0]);
arr[0] = 10;
console.log(arr[0]);
```
output : 1 10

# String methods
1. length : returns length of string
```javascript
let str = "hello";
console.log(str.length);
```
output : 5

2. indexOf() : returns index of given character in case of multiple occurence it returns index of first occurence
```javascript
let str = "hello";
console.log(str.indexOf("l"));
```
output : 2

3. lastIndexOf() : returns index of given character in case of multiple occurence it returns index of last occurence
```javascript
let str = "hello";
console.log(str.lastIndexOf("l"));
```
output : 3

4. slice() : returns substring of given string
```javascript
let str = "hello";
//syntax : slice(start,end)
console.log(str.slice(1,3));
//3 is not included only 1 and 2 are included
```
output : el

5. substring() : returns substring of given string
```javascript
//syntax : substring(start,end)
let str = "hello";
console.log(str.substring(1,3));
//3 is not included only 1 and 2 are included
```
**output : el**

6. replace() : replace given substring with another string , but if there are multiple occurence of substring then it will replace only first occurence and if no occurence is found then it will return original string
```javascript
let str = "hello world";
console.log(str.replace("world","javascript"));
```
output : hello javascript

7. split() : split string into array of substrings based on given separator
```javascript
let str = "hello world";
console.log(str.split(" "));
```
output : [ 'hello', 'world' ]


8. toUpperCase() : convert string to uppercase
```javascript
let str = "hello";
console.log(str.toUpperCase());
```
output : HELLO

9. toLowerCase() : convert string to lowercase
```javascript
let str = "HELLO";
console.log(str.toLowerCase());
```
output : hello

10. trim() : remove extra spaces from start and end of string and between words
```javascript
let str = "   hello    world   ";
console.log(str.trim());
```
output : "hello world" // extra spaces are removed

# ParseInt and ParseFloat
```javascript
//parseInt
let str = "10pz";
console.log(parseInt(str));
```
output : 10

```javascript
//parseFloat
let str = "10.5pz";
console.log(parseFloat(str));
```
output : 10.5

# Classes
```javascript
class Animal{
    constructor(name, legcount , speaks){
        this.name = name;
        this.legcount = legcount;
        this.speaks = speaks;
    }
    static mytype(){
        console.log("i am an animal");
    }
    speak(){
        console.log("hi there " + this.speaks);
    }
}
Animal.mytype();
let dog = new Animal("dog",4,"bark"); // create object of class
let cat = new Animal("cat",4,"meow");
dog.speak();
cat.speak();
```
output : i am an animal 
         hi there bark
         hi there meow

# Date and Time
```javascript
let currentDate = new Date();

// Specific date and time (year, month (0-indexed), day, hour, minute, second, millisecond)
let specificDate = new Date(2023, 0, 15, 12, 30, 0, 0);
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth(); // Note: Months are zero-based (0-January, 1-February, ..., 11-December)
let currentDay = currentDate.getDate();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();
let currentMillisecond = currentDate.getMilliseconds();

console.log(currentDate);  
console.log(specificDate);
console.log(currentYear);
console.log(currentMonth);
console.log(currentDay);
console.log(currentHour);
console.log(currentMinute);
console.log(currentSecond);
console.log(currentMillisecond);
```

output : 
        2021-09-28T06:30:00.000Z

         2023-01-15T12:30:00.000Z
         2021
         8
         28
         12
         30
         0
         0
# Calculate time taken to function to exectue
```javascript
functon myfunction(){
    let sum = 0;
    for(let i = 0; i < 1000000; i++){
        sum += i;
    }
}
let start = new Date().getTime();
myfunction();
let end = new Date().getTime();
console.log(end-start);
```
output : 5

# Math
```javascript
let num = 10.5;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.pow(2,3));
console.log(Math.sqrt(25));
console.log(Math.abs(-10));
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));
console.log(Math.random()); // returns random number between 0 and 1   
```
output : 11
         11
         10
         8
         5
         10
         5
         0.001
         0.999

# Falsy Value 

false , 0 , -0 , ""(empty string) , null , undefined , NaN , 0n(BigInt Value)


















