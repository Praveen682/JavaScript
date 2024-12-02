const obj = {
    name: 'John',
    age: 20,
    character: "good",
}

const newobj = Object.create(obj);
console.log(Object.keys(newobj));
console.log(Object.values(obj));