# TypeScript

## syntax to declare variable in typescript
```typescript
let a: number = 10;
```

## for functions
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

## ass1 
```typescript
function calculate(a: number , 
  b: number, 
  c: "add" | "sub" | "mul" | "div"
): number {
  if(c === "add"){
    return a + b;
  }
  else if( c === "mul"){
    return a * b;
  }
  else if( c === "div"){
    return a / b;
  }
  else{
    return a - b;
  }
  return 0;
}
```

- typescript code is transpiled to javascript code by tsc compiler , then js code is executed by nodejs , so typescript compiler throw compile time error but nodejs throw runtime error


```typescript
interface Person{
    name : string;
    age : number;
}
function greet(person : Person): string{
    return `Hello ${person.name}, you are ${person.age} years old!`;
}

console.log(greet({name: "John", age: 30}));
```

## classes in typescript
```typescript
interface Person{
    name :  String;
    age :  Number;
}

class PersonCLass implements Person{
    name : string;
    age : number;

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
    greet(){
        return "Hello " + this.name ;
    }
}

let person1 = new PersonCLass("John", 23);
console.log(person1.greet());
```

## interface in interface
```typescript
interface personGenderprops{
    gender : string;
    orentation : string;
    pronouns : string;
}
interface Person {
    name :  String;
    age :  Number;
    genderProps : personGenderprops;
}

function calculateAge(person : Person) : Number{
    return person.age;
}

console.log(calculateAge({
    name : "John",
    age : 20,
    genderProps : {
        gender : "male",
        orentation : "straight",
        pronouns : "he/him"
    }
}));
```

## interface extends interface
```typescript
interface personGenderprops{
    gender : string;
    orentation : string;
    pronouns : string;
}
interface Person extends personGenderprops{
    name :  String;
    age :  Number;
}

function calculateAge(person : Person) : Number{
    return person.age;
}

console.log(calculateAge({
    name : "John",
    age : 20,
    gender : "male",
    orentation : "straight",
    pronouns : "he/him"
}));
```







