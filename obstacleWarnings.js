function warningMaker(obstacle){
  return function(){
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  }
}

var obstacleSeenA = warningMaker("level A");
var obstacleSeenB = warningMaker("level B");

alert(obstacleSeenA());
