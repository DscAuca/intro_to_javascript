//this keyword determine the execution context for that call 
function whythis(name){
    let message = "salvi"
    console.log(this.message +""+ name)
  }
  
  function assign(morning){
    var vali={}
    if (morning){
      vali.message="good morning "
    }
    else {
      vali.message="good afternoon "
    }
    whythis.call(vali,"salvi");
  }
  assign(true);