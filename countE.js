function countE(){
  var phrase = prompt("Enter a something sir here sir!!");

  if(typeof(phrase) != "string"){
    alert("What you Entered is not a string type!");
    return false;
  }
  else{
    var eCount = 0;
    for(var index = 0; index < phrase.length; index++){
      if(phrase.charAt(index) == "e" || phrase.charAt(index == "E"))
        eCount++;
    }
    alert("there are " +eCount+ " Es in your phrase!");
    return true;
  }
}
