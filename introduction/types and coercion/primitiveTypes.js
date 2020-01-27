// undefined 
typeof  undefinedValiable
// string 

typeof ""
typeof ''

// number 

typeof 8

//bolean

typeof false

// object
typeof {name:"salvi", id:5268}

//symbols

//null?
typeof null

// array?

typeof []

// function ?
var s= function(){}
typeof s

// other types 

// NaN
var a="welcome"
var s = s/2;
typeof s
console.log(s)
Number.isNaN(s)


// do not use New except if you are convertimg type 
new String()
new Number()
new Boolean()


// others 

var today = new Date("January 26,2020");
today.toUTCString();
today.toString();
String(today);



