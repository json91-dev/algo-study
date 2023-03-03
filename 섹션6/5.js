function solution(s){
  let answer=0;
  const stack = [];
  let result = 0;

  for (let i =0; i < s.length; i++) {
    if (s[i] === '(') {
    
    } else if (s[i] === ')') {
      if (stack.length === 0) {
        break
      }
      
      if (s[i-1] === '(') {
        result = result + stack.length
      }
    }
  }
  
  return answer;
}

let a="()(((()())(())()))(())";
console.log(solution(a));