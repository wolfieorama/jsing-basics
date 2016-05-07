function changePowerTotal (totalPower, genID, genStatus, amtOfPower){
  for(var index = 0; index < 19; index++){
    if (genStatus == "on"){
      alert("Generator #" +genID+  " is now on, adding " + amtOfPower + " MW, for a total of " +(totalPower + amtOfPower)+ " MW!");
      return totalPower + amtOfPower;
    }
    else if (genStatus == "off"){
      alert("Generator #" +genID+  " is now off, adding " + amtOfPower + " MW, for a total of " +(totalPower - amtOfPower)+ " MW!");
       return totalPower - amtOfPower;
    }
  }
}
