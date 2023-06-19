function solution(s, t){
  let answer=0;
  for(let x of s){
    if(x===t) answer++;
  }
  return answer;
}

function mySolution(s, t){
  let answer=0;
  for (const c of str) {
    if (c === t) {
      answer++
    }
  }

  return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(mySolution(str, 'R'));
console.log(solution(str, 'R'));
