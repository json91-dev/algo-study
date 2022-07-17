function solution(arr){
  let answer=0, cnt=0;
  for(let x of arr){
    if(x===1){
      cnt++;
      answer+=cnt;
    }
    else cnt=0;
  }

  return answer;
}


function solutionMy(arr){
  let answer=0;
  let plusScore = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      answer = answer + plusScore + 1;
    }

    if (i + 1 === arr.length) {
      continue;
    }

    if (arr[i] === 1 && arr[i + 1] === 1){
      plusScore = plusScore +1
    } else {
      plusScore = 0;
    }
  }

  return answer
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 1];
console.log(solutionMy(arr));
console.log(solution(arr));
