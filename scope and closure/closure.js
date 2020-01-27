//closure is when a function remember the valiable outside of it even if you pass that function elsewhere 

function logout (crush,me){
    console.log("you just loged out i will notify your crush in five second from now " );
    setTimeout (function notifyHeraWhenISignedOut5SecondAGo(){
      console.log(`hello ${crush}   ${me} waved at you and was online a second ago` );
    },5000);
  }
  logout("someoneHere","Salvi")