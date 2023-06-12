function func(params) {
  console.log('clg1');
  return function() {
    console.log('clg2');
    params();
    return function() {
      console.log('clg4');
      return 'clg5';
    }
    
  }
}

func(function(){
  console.log('clg3');
})()();
