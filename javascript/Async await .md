# setTimeout
```javascript
setTimeout(() => {
    console.log("hello");
}, 1000);
```
### setTimeout is use to run the function after some time


# setInterval
```javascript
setInterval(() => {
    console.log("hello");
}, 1000);
```
### setInterval is use to run the function after some time
diffrence between setTimeout and setInterval is that setTimeout run only one time but setInterval run infinite time , setInterval run after every given time

# Asynchronous JavaScript
### 1. Callbacks
### 2. Promises
### 3. Async/Await

how does asynchronous javascript work?
when a thread encounter an asynchronous code it move that code to web api and continue the execution of code and when web api complete the execution of code it move that code to callback queue and callback queue move that code to call stack and call stack execute that code but before moving to call stack callback queue check that call stack is empty or not if call stack is not empty then callback queue wait for call stack to be empty and then callback queue move that code to call stack and call stack execute that code


# Callbacks
```javascript
function fun1() {
    console.log("fun1");
}
function fun2(callback) {
    setTimeout(() => {
        console.log("fun2");
        callback();
    }, 1000);
}
function fun3() {
    console.log("fun3");
}
fun1();
fun2(fun3);
console.log("hello");
```
output :-  fun1
           hello
           fun2
           fun3


somne asynchronous function
1. setTimeout
2. setInterval
3. fetch ->
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
4. readFile

# Promises
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello");
    }, 1000);
});
console.log(promise);
promise.then((data) => {
    console.log(data);
});
```
output :- Promise {<pending>}
          hello
basically promise is a object which have two property resolve and reject , the data it return is resolve and error it return is reject , and data returned argument in function specified in then function

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("hello");
});
console.log(promise);
promise.then(() =>{
    console.log(data);
});
```
output :- Promise {<resolved>: "hello"}
          hello

# Async/Await
```javascript
async function fun() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
}
fun();
```
output :- {userId: 1, id: 1, title: "delectus aut autem", completed: false}

any function which have async keyword is a asynchronous function and await keyword is use to wait for the response of asynchronous function
to use await keyword we have to use async keyword in function

### if error occured in async/await
```javascript
async function fun() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fun();
```
