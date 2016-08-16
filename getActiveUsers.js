getActiveUsers(15, function(data){
  let userNameDivs = appendUserNames(...data.userNames); // to break the array using the spread operator 
  appendToSidebar(".side-bar", userNameDivs);
});

function getActiveUsers(topicId, cb){
  _fetchTopicInfo("/topics/" + id, function(data){
    cb(data);
  });
}
