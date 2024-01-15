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