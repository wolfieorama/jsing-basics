var Tornado = function(category, affectedAreas, windGust){
  this.category = category;
  this.affectedAreas = affectedAreas;
  this.windGust = windGust;
};

var cities = [["kansas City", 78900], ["Topeka", 90000], ["Lexena", 78909]];
var twister = new Tornado("F5", cities, 220);
cities.push(["mimi", 10000]);

Tornado.prototype.valueOf = function(){//overiding the valeuof prototype method with sum
  var sum = 0;
  for(var i = 0; i < this.affectedAreas.length; i++){
    sum = sum + this.affectedAreas[i][1];
  }
  return sum;
};

Tornado.prototype.toString = function(){
  var list = "";
  for(var i = 0; i < this.affectedAreas.length; i++){
    if(i < this.affectedAreas.length - 1){
      list = list + this.affectedAreas[i][0];
    }
    else{
      list = list + "and" + this.affectedAreas[i][0];
    }
  }
  return "........." + this.category + "........." +  this.windGust + "mph..........." + list + "......." + this.valueOf() + ".";

};
