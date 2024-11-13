
function solution(arr) {
  const answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i], j;
    for (j  = i - 1  ; j >= 0; j--) {
      if (temp < arr[j]) {
         arr[j + 1] = arr[j]
      } else {
        break;
      }
    }
    arr[j + 1] = temp
  }


  return answer
}


console.log(solution([5,2,10,6, 15, 14]))
