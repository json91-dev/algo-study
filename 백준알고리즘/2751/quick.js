// For local test
const input = [10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7,];

// const fs = require('fs');
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num, 10));
// const N = input.shift()

function quickSortStarter (arr) {
  if (!arr.length) {
    return arr;
  }
  return quickSort(arr, 0, arr.length -1);
}

function quickSort(array, l, r) {
  const pivot = array[Math.floor((l + r) / 2)];
  let left = l;
  let right = r;

  while (left <= right) {
    while (array[left] < pivot) left ++;
    while (array[right] > pivot) right--;

    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }

  if (l < right) quickSort(array, l, right);
  if (r > left) quickSort(array, left, r);
  return array;
}

console.time('시작')
const result = quickSortStarter(input).join('\n');
console.timeEnd('시작')

// For submit

/** 시간초과로 실패.. **/

// const arr = input.splice(1)
// console.log(solution(arr).join('\n'))

