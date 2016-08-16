function loadProfiles(userNames = [], { profilesClass, reverseSort } = {}) { // named parameters aand default
  profilesClass = profilesClass || ".user-profile";
  reverseSort   = reverseSort   || false; //name params assigned no need to declare with let

  if (reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}
