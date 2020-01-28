// assign with dots  anything using dots(.) in javascript is an object
var person ={};
person.name="mr jean"
// person
var personCopy ={
  "name": "mr jean "
};
// personCopy

//access with dots 
var primitive = person.name
var nonPrimitiveMe=person
nonPrimitiveMe
primitive// mr jean
person.name="salvi"
primitive// mr jean 
nonPrimitiveMe

// keep in mind that assigning a valiable to a primitive value you are passing by value not by reference vice versa

console.log(primitive.age)




