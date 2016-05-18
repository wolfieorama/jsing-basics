function adventureSelector(userChoice) {
  // return anonymous functions inside conditional blocks
  if(userChoice == 1){
    return function(){ alert("You selected the Vines of Doom!"); };
  }
  else if(userChoice == 2){
    return function(){ alert("Looks like you want the Lake of Despair!"); };
  }
    else{
    return function(){ alert("The Caves of Catastrophe!"); };
    }
}
