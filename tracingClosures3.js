var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

function mystery(input) { //3
  var secret = 4;
  input += 2; //5
  function mystery2(multiplier) {
    multiplier *= //input; multiplier = multiplier * 5
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}




var hidden = function mystery2 ( multiplier ) {//6
  multiplier = multiplier * 5;//30
  return 4 * multiplier;//120
}

var jumble = function mystery4(bonus) {//2
  return hidden(6) + 2;
}

var result = 120 + 2
