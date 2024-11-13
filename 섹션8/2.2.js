
function solution(n) {
  let answer = ''
  function DFS(n) {
    if (n === 1) {
      answer = answer + '1'
      return;
    }
    if (n % 2 === 0) {
      const m = n % 2
      answer = answer + '0'
      DFS(Math.floor(n / 2))
    } else {
      answer = answer + '1'
      DFS(Math.floor((n -1) / 2))
    }
  }
  DFS(n)
  return answer;
}

console.log(solution(11))
