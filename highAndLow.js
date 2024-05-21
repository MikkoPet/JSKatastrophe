function highAndLow(numbers){
    let numbersList = numbers.split(' ');
    let lowest = +numbersList[0];
    let highest = +numbersList[0];
    
    for ( let i = 1; i < numbersList.length; i++) {

      lowest = (lowest > +numbersList[i]) ? numbersList[i] : lowest;
      highest = (highest > +numbersList[i]) ? highest : numbersList[i];

    }
    
    return highest + ' ' + lowest;
  }

  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));