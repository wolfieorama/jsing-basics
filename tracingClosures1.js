function mystery() {
  var secret = 6;
  function mystery2(multiplier) { //3
    multiplier *= 3; //3*3
    return secret * multiplier; //6*9
  }
  return mystery2;
}

var hidden = mystery();
var result = hidden(3); //54
