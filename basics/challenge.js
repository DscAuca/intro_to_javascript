//`use strict`; 
/// writte an arrow function to determine if the given parameter is a real object or not 

//hint typeof array or null types is an abject but lets be creative we want a real object only



//solution




//question two   


//what is the output of this codes and why?


const challenge=()=>{
   var a=c=7
}
challenge();
(function challenge2(){
    console.log(typeof a);
    console.log(typeof c);
})()

function foo1 (){
    return {username:"jean"};
} 
function foo2(){
    return {username:"jean"};
} 

console.log(foo1() );
console.log(foo1() );


function arrayFromValue(item) {
    return
      [item];
  }
  
  console.log(arrayFromValue(10))

  const length = 4;
  const numbers = [];
  for (var i = 0; i < length; i++);{
    numbers.push(i + 1);
  }
  
  console.log(numbers); 
  
  let u;
for (u = 0; u < 3; u++) {
  const log = () => {
    console.log(u);
  }
  setTimeout(log, 100);
};

console.log(myVar);   // => undefined
console.log(myConst); // => error

var myVar = 'value';
const myConst = 3.14;

