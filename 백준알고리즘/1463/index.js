const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(n) {
  let dy = Array.from({length:n+1}, ()=>0);
  dy[1] = 0
  dy[2] = 1

  for (let i = 3; i <= n; i++) {
    const divide3 = i % 3 === 0 ? dy[i/3] : Number.MAX_SAFE_INTEGER
    const divide2 = i % 2 === 0 ? dy[i/2] : Number.MAX_SAFE_INTEGER
    const divideNone = dy[i-1]
    dy[i] = Math.min(divide3, divide2, divideNone) + 1
  }

  const answer = dy[n]
  return answer
}

console.log(solution(input))
