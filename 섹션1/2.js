function solution(a, b, c){
  let answer= "YES";
  let max = a;
  let total = a + b + c;
  
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  
  if (total - max > max ) {
    answer = 'YES'
  } else {
    answer = 'NO'
  }
  
  return answer
}

console.log(solution(10,1,1))