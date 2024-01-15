# this keyword  
this keyword is used to refer to the current object in a method or constructor.
    
 ```javascript
    var person = {
        firstName: "John",
        lastName : "Doe",
        id     : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    };
```

jab koi object nhi hoti tab window object ko refer karta hai

# try & catch

```javascript
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
```
# Arrow function

```javascript
const x = (x, y) => {
    return x * y;
}
```

# map function

```javascript
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((num) => {
    return num * 2;
})
console.log(arr2);
```

# filter function

```javascript
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.filter((num) => {
    return num > 2;
})
console.log(arr2);
output :- [3, 4, 5]
```
###  for filter callback function return true or false
###  map and filter function return new array 

# every function

```javascript
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.every((num) => {
    return num > 2;
})
console.log(arr2);
output :- false
```
callback function return true or false

# reduce function

```javascript
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.reduce((accumulator, num) => {
    return accumulator + num;
})
console.log(arr2);
output :- 15
```
to change the value of accumulator
```javascript
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.reduce((accumulator, num) => {
    return accumulator + num;
}, 10)
console.log(arr2);
output :- 25
```

###  accumulator is a variable

# some function
some function is same as every function but some function return true if any one element is true

```javascript
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.some((num) => {
    return num > 2;
})
console.log(arr2);
output :- true
```
callback function return true or false

# find function
find function is same as filter function but find function return only one element

```javascript
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.find((num) => {
    return num > 2;
})
console.log(arr2);
output :- 3
```
callback function return true or false

# default parameter

```javascript
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
```
###   DEFAULT PARAMETERS MUST BE LAST


# Spread
### for array
```javascript
const odd = [1, 3, 5];
const even = [2, 4, 6];
const arr = [...odd, ...even];
console.log(arr);
output :- [1, 3, 5, 2, 4, 6]
```
### for string
```javascript
const str = "hello";
const arr = [...str];
console.log(arr);
output :- ["h", "e", "l", "l", "o"]
```
### for object
```javascript
const obj = {
    name: "sahil",
    age: 20
}
const obj2 = {
    ...obj,
    city: "delhi"
}
console.log(obj2);
output :- {name: "sahil", age: 20, city: "delhi"}
```

### spread operator is use to copy the array or object

# Rest
Allows functions to take an indefinite number of arguments as an array.

```javascript
function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));
output :- 15
```
generally rest operator is use in function parameter 
at last parameter

# Destructuring
### for array
```javascript
const arr = [1, 2, 3, 4, 5];
const [a,b,c] = arr;
console.log(a ,b ,c);
output :- 1 2 3 
```
### for object
```javascript
const obj = {
    marks: 90,
    class: 12,
    subject: "maths",
    name: "sahil",
    age: 20,
};
const {name, age} = obj;
console.log(name, age);
output :- sahil 20


























