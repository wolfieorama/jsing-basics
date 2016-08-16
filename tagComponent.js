function TagComponent(target, urlPath){
  this.targetElement = target;
  this.urlPath = urlPath;
}

TagComponent.prototype.render = function(){

  getRequest(this.urlPath, (data) => {
    let tags = data.tags;
    // since we cant call this.targetElement inside the callback we have to use arrow function, they have lexical binding, expanding the scope
    displayTags(this.targetElement, ...tags);
  });
}

let tagComponent = new TagComponent(targetDiv, "/topics/17/tags");
tagComponent.render();
