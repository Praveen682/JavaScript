
//global scope
var a = 1;
let b = 2;
const c = 3;


//local scope, values can be changed within curly braces;
{
const b = 4;
console.log(b);
}
console.log(b);