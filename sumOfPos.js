function positiveSum(arr) {
    let sum = 0;
    for (let n = 0; n < arr.length; n++) {
      if (arr[n] > 0) {
        sum += arr[n];
      }
    }
    return sum;
  }