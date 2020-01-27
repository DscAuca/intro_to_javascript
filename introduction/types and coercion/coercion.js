
//coercion 

var success ="you are officially registered as AUCA student with an id number of ";
var id=25;
var name="salvi"
console.log(`welcome ${name}
${success}  ${id}  
feel free to reach out to register@auca.ac.rw for more incormation 

once again weclome `)

//boolean

//return false
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(false))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean(0,-0))

//return true 

console.log(Boolean({}))
console.log(Boolean("false"))
console.log(Boolean([undefined]))
console.log(Boolean(22))
console.log(Boolean(function(){}))

let student = [12,5454,45454,"fjhewuhdsufh"];
let newStudent="value";
while (student.length) {
  console.log(student.pop());
}
if (newStudent.value) {
  console.log(newStudent);
}

// equality 

// == allows coercion (types can also be diffrent )
var coe ="11" 
var coe2=11 

console.log(coe==coe2)
// === disallow coercion(types must be the same )

console.log(coe===coe2)

console.log(null==undefined)
console.log(null===undefined)