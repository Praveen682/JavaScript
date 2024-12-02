const obj = {
    name: 'John',
    age: 30,
}

const newobj = JSON.stringify(obj);
console.log(newobj);
const oldobj = JSON.parse(newobj);
console.log(oldobj);

console.log(typeof(newobj));
console.log(typeof(oldobj));