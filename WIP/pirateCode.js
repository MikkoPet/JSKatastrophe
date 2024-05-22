function amaroPlan(pirateNum){
    let gold = pirateNum * 20;
    let output = [];
    
    for ( let i = 0; i < pirateNum - 1 ; i++ ) {
      if ( i % 2 !== 0 ) {
        output[i] = 1;
        gold -= 1;
      } else {
        output[i] = 0
      }
    }

    output.unshift(gold);
    return output;
  }

  console.log(amaroPlan(2));
  console.log(amaroPlan(3));
  console.log(amaroPlan(4));
  console.log(amaroPlan(5));