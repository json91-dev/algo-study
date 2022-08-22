function solution(s){
  let answer = 'YES';
  const lowString = s.toLowerCase()
  const n = lowString.length

  for (let i = 0; i <= Math.ceil(n / 2); i ++) {
    if (lowString[i] !== lowString[n -i -1]) {
      answer = 'NO'
      break;
    }
  }

  return answer;
}

let str="goooG";
console.log(solution(str));
