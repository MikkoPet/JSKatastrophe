function solution(str){
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let targetPosition = str.length - 1 - i;
    newString += str[targetPosition];
  }
  return newString;
}