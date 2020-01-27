//class
class event{
    constructor(speaker){
       this.speaker=speaker;
    }
    setTopic=(topic)=>{
    //arrow function save the binding of this in closure thats created when the function is created thats why i used window instead of using this 
    console.log("Hello everyone i am "+ window.speaker +"and i am gonna speak about"+ topic)
  }
  }
  
  
  let devfest=new event("Salvi");
  let dsc = new event("Jesus");
  
  devfest.setTopic("Magic of AI");
  dsc.setTopic("The community we need ");