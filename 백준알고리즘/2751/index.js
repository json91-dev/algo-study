const fs = require('fs');
// For local test
// const input = [10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

// For submit
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num, 10));

/** 시간초과로 실패.. **/
function solution(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr;
}

const arr = input.splice(1)
console.log(solution(arr).join('\n'))

