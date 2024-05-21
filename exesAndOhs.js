function XO(str) {
  
    let arrStr = str.split('');
    
      let xAmt = arrStr.filter(arrStr => arrStr.includes("x") || arrStr.includes("X"));
      let oAmt = arrStr.filter(arrStr => arrStr.includes("o") || arrStr.includes("O"));
    
    return xAmt.length === oAmt.length;
  }

  console.log(XO('xXxxoOm'))


  // /x/gi and /o/gi selects both x and X and o and O respectively, no need for ||