// in javascript arrays are objects except the special methods they have like push pop ..

var person =[]
person.name="mrs jeannette"
var myWife = person.name
myWife //??
person.name="sweet heart"
person.push(myWife)
person
myWife//??

// barckets 


var person =[]
person.name="mrs jeannette"
var myWife = person.name
myWife //??
person.name="sweet heart"
person[2]=myWife
//  person[inc]="dont do this"
// should use person.pre instead or 
 person["inc"]="do this instead"
let inc2 ="yoo"
person[inc2]="or do this instead"
person
myWife//??

// non valid charaxcters 
var box={}
box['materials']="none of us"
box[0]='neow '
box['@#$']='is it gonna work'
box={
  "material":"yoo i am right here ",
  "0":"youre welcome",
  "^&":"nfjfhhf",
}

// array is special object character 
var y=[]
y.length
y.name="jean"
y.length
y[10]=false

y.length //??

var game ={}
game.murder="??"

game['weapon']=[
  {type:'lazers',locatiom:'lab'},
  {type:'angry cats'},
  {... 'dish soap' }// do you know what ... does
];
game.name=[];
game.name[0]='miss scarlet';
game.name
game.name.push('mr green') 
game.name
console.log(game.name.push['miss ','mr green'] )//this is no gonna work
game.name