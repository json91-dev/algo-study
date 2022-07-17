function solution(s){
  let answer="";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      answer = `${answer}#`
    } else {
      answer = `${answer}${s[i]}`
    }
  }
  return answer;
}

let str="BANANA";
console.log(solution(str));
