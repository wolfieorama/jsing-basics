function hideReplies(topicId){

  let previewText;

  if(_isFixedTopic(topicId)){
    const TEXT_SEPARATOR = '%%';
    previewText = _fetchLongPreview(topicId, TEXT_SEPARATOR);
  }else{
    previewText = _fetchPreview(topicId);
  }

  console.log( TEXT_SEPARATOR ); // this wil give a reference error because const isnt available out the scope of if
}

hideReplies(42);
