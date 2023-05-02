function mySolution(n){
  let answer="";

  function DFS(value) {
    if (n === 1) {
      return;
    }
    if (Math.pow(2, value) > n) {
      DFS(value -1)
      answer = answer +'0'
    } else {
      n = n - Math.pow(2, value)
      DFS(value-1)
      answer= answer + '1'
    }
  }

  DFS(n)

  return answer;
}
// 1. 2로 나눈 나머지를 거꾸로 출력한다. (호출을 밑에다 둔다.)
function solution(n) {
  let answer = '';
  function DFS(n) {
    // 재귀가 언제 멈춰야 하는지 => 재귀 초보일때는 if문을 잘 쓸것
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2)) // 2로 나눈 몫
      // answer+=(n % 2)
      answer+=String(n % 2)
    }
  }
  DFS(n)

  return answer
}

// console.log(mySolution(11));
console.log(solution(11))
