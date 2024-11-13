
function sort(arr) {
  let answer = arr;

  for (let i = 0; i < answer.length - 1 ; i++) {
    let idx = i;
    for (let j = i + 1 ; j < answer.length; j++) {
      if (answer[idx] > answer[j]) {
        idx = j
      }
    }

    [arr[i], arr[idx]] = [arr[idx], arr[i]]
  }

  return arr
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

console.log(sort([13,5,11,7,23,15]))


