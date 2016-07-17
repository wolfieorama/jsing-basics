var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},

  addRanger: function(name, skillz, station){
    this.numRangers++;
    this["rangers" + this.numRangers] = {
      name: name,
    skillz: skillz,
    station: station
    };
  }

};

// create addBulb function property here
lighthouseRock.addBulb = function(name, wattage){
  this.weaponBulbs.push([name, wattage]);
};

// call the addRanger method on lighthouseRock
lighthouseRock.addBulb("mike", 400);
lighthouseRock.addBulb("Blasterbright", 5000);
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);
lighthouseRock.addRanger("Jordan Wade", "dual-wield hand crossbow", 4);
