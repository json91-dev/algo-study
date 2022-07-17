function solution(arr){
  let answer=1, max=arr[0];
  for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
      answer++;
      max=arr[i];
    }
  }
  return answer;
}

function solutionMe(arr){
  let answer = 1;

  for (let i = arr.length - 1; i >= 1; i--) {
    const me = arr[i];

    for (let j = i -1; j >= 0 ; j--) {
      if (arr[j] >= me) {
        // 앞에 나보다 큰 학생이 있음
        break;
      }

      if (j === 0) {
        answer++
      }
    }
  }

  return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
console.log(solutionMe(arr));
