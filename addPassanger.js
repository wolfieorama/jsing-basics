function addPassanger (name, list){
  if (list.length == 0){
    list.push(name);
    return list;
  }
  else{
    for(i=0; i < list.length; i++){
      if (list[i] == undefined){
        list[i] = name;
        return list;
      }
      else if(list[i] == list.length - 1){
        list.push(name);
        return list;
      }
    }
  }

}
