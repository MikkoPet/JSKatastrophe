String.prototype.toJadenCase = function (str) {
    let newString = str.split(' ');
    
    for (let i = 0; i < str.length; i++ ) {
      newString[i] = newString[1].charAt(0).toUpperCase();
    }
    
    newString = newString.join();
    return newString;
  };