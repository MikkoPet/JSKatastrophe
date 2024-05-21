function squareDigits(num){
    num = String(num);
    let result = "";
    
    for ( let i = 0; i < num.length; i++ ) {
      result += num[i] * num[i];
    }
    
    return result;
  }

  console.log(squareDigits(3212));
  console.log(squareDigits(2112));
  console.log(squareDigits(0));

