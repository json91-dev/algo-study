function mySolution(arr){
  let answer=arr;
  for (let i = 0; i < arr.length ; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = -1
    for (let j = arr.length -1; j > i; j--) {
      if (min > arr[j]) {
        min = arr[j]
        minIndex = j
      }
    }

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
