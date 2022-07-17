function solution(s){
  let answer;
  let mid=Math.floor(s.length/2)
  if(s.length%2===1) answer=s.substring(mid, mid+1);
  else answer=s.substring(mid-1, mid+1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
}


function solution_my(s){
  let answer = '';

  if (s.length < 1) return;

  if (s.length % 2 === 1) { // 홀수
    const index = Math.floor(s.length / 2)
    answer += s[index]

  } else { // 짝수
    const index = Math.floor(s.length / 2)
    answer += s[index - 1]
    answer += s[index]
  }

  return answer;
}
console.log(solution_my("study"));
console.log(solution_my("disco"));
