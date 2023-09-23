function mySolution(arr){
  let answer=arr;

  for (let i = 0; i < arr.length ; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = -1

    // 마지막 인자에서 하나씩 채워나감.
    // 즉, 첫번째 인자랑 뒤에있는 것들이랑 비교하고 첫번째 값 정함. (첫번째 값이랑 제일 작은 애랑 비교해서 바꿈)
    // 다음에는 두번째 인자랑 뒤에있는 것들이랑 비교하고 두번째 값 정함.
    for (let j = arr.length -1; j > i; j--) {
      if (min > arr[j]) {
        min = arr[j]
        minIndex = j
      }
    }

    // 최소값과 현재 Index의 인자를 바꿔줌
    if (arr[i] > arr[minIndex]) {
      const temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return answer;
}

function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length; i++){
    let idx=i;
    for(let j=i+1; j<arr.length; j++){
      if(arr[j]<arr[idx]) idx=j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));
console.log(mySolution(arr));
