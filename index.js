// Function that receives a function and calls it
f receivesAFunction(callback) {unction
    console.log('receivesAFunction called');
    callback();
  }
  
  function returnsANamedFunction() {
    console.log('returnsANamedFunction called');
    function namedFunction() {
      return 'I am a named function';
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    console.log('returnsAnAnonymousFunction called');
    return function() {
      return 'I am an anonymous function';
    };
  }
  
  
  