var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber % 4 == 0){
    console.log("Removing " +(numSheep * 0.75)+ " sheep from the population.");
    numSheep = numSheep - (numSheep * 0.75);
  }
  else if(numSheep > 10000){
    console.log("Removing " +(numSheep/2)+ " sheep from the population.");
    numSheep = numSheep - (numSheep / 2);

  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
