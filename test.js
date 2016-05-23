function buildAirlineTicketMaker(class){
  return function(airline){
    alert("Here is your flight ticket via the " + class + ".\n" +
          "Welcome to the luxury of, " + airline + "!");
  }
}

var getFirstClassTicket = buildAirlineTicketMaker("First class");

var getBusinessClassTicket = buildAirlineTicketMaker("Business class");

var getEconomyClassTicket = buildAirlineTicketMaker("Economy class");
