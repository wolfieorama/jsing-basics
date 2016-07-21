function loadProfiles(userNames){
  let message = "Loading " + userNames.length + " user(s)"; // the variable message is trapped inside the calibraces

  _displayFlash(message);

  _fetchProfiles(userNames, function(data){
    let profiles = data.profiles; // the variable message is trapped inside the calibraces
    _addToPage(profiles);
  });
}
