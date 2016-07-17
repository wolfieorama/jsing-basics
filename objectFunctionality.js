var aquarium = {
  Nemo: {type: "fish", species: "clownfish", length: 3.7},
  Marlin: {type: "fish", species: "clownfish", length: 4.1},
  Dory: {type: "fish", species: "blue tang", length: 6.2},
  Peach: {type: "echinoderm", species: "starfish", length: 5.3},
  "Coral Castle": {type: "environment", material: "coquina", moves: false},
  "Dragon Statue": {type: "environment", material: "plastic", moves: false},
  addCritter: function(name, type, species, length){ //addCritter method
    this[name] = {type: type, species: species, length: length};
  }
}

//to add a new object eg a Critter into our aquirium we can create a fn or push the fn (as a property) to be part of the object as method then use the keyword this to refer to the object i.e container
// function addCritter(container, name, type, species, length){
//   container[name] = {type: type, species: species, length: length}
// }

aquarium.addCritter("Bubbles", "fish", "yellow tang", 5.6); //adds bubbles into aquarium

aquarium.takeOut = function(name){
  this[name].name = name; //  this create a new property inside the object with the same name as the object
  var temp = this[name]; // this holds the object we are about to delete
  delete this[name];
  return temp;
};

var fishOutOfWater = aquarium.takeOut("Marlin");
console.log(fishOutOfWater);
