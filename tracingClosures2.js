function mystery(input) { //4
  var secret = 5;
  function mystery2(multiplier) { //2
    multiplier *= input; //2*4
    return secret * multiplier; //5*8
  }
  return mystery2;
}


var hidden = mystery(4);
var result = hidden(2);
