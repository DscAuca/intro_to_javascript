//function declaration
function greatings(user){
return great(user)
} 

//function expression
const great = function(user){
    return greatStudent(user)
}
// arrow function
const greatStudent =(user)=>{
    return lastgreat(user)
}

//consise arrow function 
const lastgreat= user =>  console.log(`hello ${user.username}  welcome to FUnction expression`);

//call a function
let user ={username:"salviosage", role:"student"};
greatings(user);
