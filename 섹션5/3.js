function solution(m, arr){
  console.time('solution')
  let answer=0, lt=0, sum=0;
  for(let rt=0; rt<arr.length; rt++){
    sum+=arr[rt];
    if(sum===m) answer++;
    while(sum>=m){
      sum-=arr[lt++];
      if(sum===m) answer++;
    }
  }
  console.timeEnd('solution')
  return answer;
}

function mySolution(m, arr){
  console.time('mySolution')
  let answer=0
  let sumOfItem = 0;
  let startIndex = 0;

  while( startIndex !== arr.length) {
    console.log(startIndex)
    for (let i = startIndex; i < arr.length - 1; i++) {
      sumOfItem += arr[i]

      if (sumOfItem === m) {
        answer++
        break;
      } else if (sumOfItem > m) {
        break;
      }
    }
    sumOfItem = 0;
    startIndex++
  }

  console.timeEnd('mySolution')
  return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
console.log(mySolution(6, a));
