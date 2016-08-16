function displayTags(targetElement, ...tags){//...tags is a rest parameter which is an array, rest params are always the last arguement

  let target = _findElement(targetElement);

  for(let i in tags){
    let tag = tags[i];
    _addToTopic(target, tag);
  }
}

//or

function displayTags(...tags){//...tags is a rest parameter which is an array, rest params are always the last arguement fn defination

  for(let i in tags){
    let tag = tags[i];
    _addToTopic(target, tag);
  }
}

//spread operator

getRequest("/topics/17/tags", function(data){
  let tags = data.tags;
  displayTags(...tags) //spread operator in fn invocation
})
