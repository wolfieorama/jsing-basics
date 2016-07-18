var mimi = "Hello today sir hope you are havng some tea";
var geezer = "All i miss is some goood old english tea cup of tea";

String.prototype.countAll = function (letter) { // the fn countAll is an inheritable property of the String prototype 
  var letterCount = 0;
  for(var i = 0; i < this.length; i++){
    if(this.charAt(i).toUpperCase() == letter.toUpperCase()){
      letterCount++;
    }
  }
  return letterCount;
};

var checkLetter = mimi.countAll("o");
console.log(checkLetter);
