let place = "Klab";
let a = () => {
  place = "auca rwanda";
  workshop = "developer student clubs ";
};

console.log(place, workshop);

//undefined and undeclared 

let a
console.log(typeof a)//undefined
console.log(typeof b)//undeclared

///function expression 


var courses=[]
let courseone= {id:"insy665"  ,name:"computer science "};
let course2={id:"amath54546546"  ,name:"applied math "};
courses.push(courseone,course2) 
console.log(courses.map(ids=>courses))
console.log(courses.map(function getcourses(courses){return courses}))