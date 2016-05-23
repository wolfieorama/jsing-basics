function buildAirlineTicketMaker(tclass){
  return function(airline){
    alert("Here is your flight ticket via the " + tclass + ".\n" +
          "Welcome to the luxury, " + airline + "!");
  }
}

var getFirstClassTicket = buildAirlineTicketMaker("First class");

var getBusinessClassTicket = buildAirlineTicketMaker("Business class");

var getEconomyClassTicket = buildAirlineTicketMaker("Economy class");
