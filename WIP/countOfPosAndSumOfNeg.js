function countPositivesSumNegatives(input) {
    let output = [];
    
    if( input.length === null ||input.length === 0 ) {   
      return output;
    }
     
    let posi = 0;
    let negi = 0;
    
    for ( let i = 0; i < input.length; i++ ) {
      if ( input[i] > 0 ) {
        posi++;
      }
      if ( input[i] < 0 ) {
        negi += input[i];
      }
    }
  
    output[0] = posi;
    output[1] = negi;
    
    return output;
    
}