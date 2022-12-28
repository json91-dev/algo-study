/** 연속 부분수열 1 **/
/** N개의 수로 이루어진 수열이 주어집니다.
 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
 만약 N=8, M=6이고 수열이 다음과 같다면
 12131112
 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
**/

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
