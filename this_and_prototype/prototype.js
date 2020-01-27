//prototype
function event(speaker){  // this is like a constructor 
    this.speaker=speaker;
  }
  event.prototype.setTopic=(topic)=>{ //settopic  is like a method 
    //arrow function save the binding of this in closure thats created when the function is created thats why i used window instead of using this 
    console.log("Hello everyone i am "+ window.speaker +"and i am gonna speak about"+ topic)
  }
  let devfest=new event("Salvi");
  let dsc = new event("Jesus");
  
  devfest.setTopic("Magic of AI");
  dsc.setTopic("The community we need ");