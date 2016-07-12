function getMysteryNumber(){

  // return  chooseMystery(); the second variable overwrites the first one and at this point since the last variables chooseMystery is undefined since they were hoisted if we call getMysteryNumber(); we get undefined

  var chooseMystery = function(){
    return 12;
  }
  return  chooseMystery(); // at this point we shall get 12 because the fn ends after return and chooseMystery will be holding the value of 12

  var chooseMystery = function(){
    return 7;
  }
  // return  chooseMystery(); // at this we get 7 so the above similar reason

}

//ways to avoid hoisting issues:
  // avoid fn expressions or make you have them declared before using them because their variable will loaded but undefined
  // use declared fns  bcause they are hoisted and loaded first into mem
