function solution(arr) {
  const answer = arr;

  for (let i = 0 ; i < arr.length ; i++) {
    for (let j = 0 ; j < arr.length - i ; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return answer
}

console.log(solution([5,3,2,1,3,5,8,11,9]))
// 시간복잡도 : O(n^2)
// 공간복잡도 : O(1)
