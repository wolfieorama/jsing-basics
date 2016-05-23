function buildCoveTicketMaker(transport){
  return function(name){
    alert("Here is your transport ticket via the " + transport + ".\n" +
          "Welcome to the cold cove closures Cove, " + name + "!");
  }
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");

var getBattleshipTicket = buildCoveTicketMaker("Battleship");

var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");
