function mySolution(s){
  const stackNumber = [];
  let result = -1;
  
  for (let i of s) {
    if (isNaN(i)) {
      let a, b, op;
      op = i;
      if (result === -1) {
        a = stackNumber.pop();
        b = stackNumber.pop();
        result = eval(`${a}${op}${b}`)
      } else {
        a = stackNumber.pop();
        result = eval(`${result}${op}${a}`)
      }
    } else {
      stackNumber.push(i)
    }
  }
  
  return result;
}

let str="352+*9-";
console.log(mySolution(str))
// console.log(mySolution(str));