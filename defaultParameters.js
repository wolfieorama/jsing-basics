function displayTopicsPreview( topics = [] ){ //now we can call this fn like this displayTopicsPreview(); and no errors
  let message = "There are currently " + topics.length;
  _displayPreviewMessage(topics, message);
}
