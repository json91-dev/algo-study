const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(' ')

input.forEach((item, index) => {
  input[index] = Number(item)
})

function solution(arr) {
  // arr[0] =
}

const arr = input.splice(1)

console.log(solution(arr))

