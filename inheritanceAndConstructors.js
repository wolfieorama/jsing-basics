function Shoe (shoeSize, shoeColor, forGender, constructStyle){// 'constructor fn'
  this.size = shoeSize;
  this.color = shoeColor;
  this.gender = forGender;
  this.construction = constructStyle;
}

Shoe.prototype = {
  putOn: function(){alert("your "+ this.construction +" Shoe is on!")},// prototypes can pull data from their instances
  takeOff: function(){alert("Phew! somebody's size "+ this.size + " are fragrant")}
}

var beachShoe = new Shoe(10, "blue", "women", "flipflop");// new keyword asks the shoe contsructor to build anew keyword
