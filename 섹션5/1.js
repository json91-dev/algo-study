// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.

function solution(arr1, arr2){
  console.time('solution')
  let answer=[];
  let n=arr1.length;
  let m=arr2.length;
  let p2;
  let p1=p2=0;
  while(p1<n && p2<m){
    if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while(p1<n) {
    answer.push(arr1[p1++]);
  }
  while(p2<m) {
    answer.push(arr2[p2++]);
  }

  console.timeEnd('solution')
  return answer;
}


function mySolution(arr1, arr2){
  console.time('mySolution')
  let answer=[];
  answer = [...arr1, ...arr2]

  for (let i = answer.length - 1; i >= 1; i--) {
    for (let j = i - 1; j >= 0; j --) {
      if (answer[i] < answer[j]) {
        const swap = answer[i]
        answer[i] = answer[j]
        answer[j] = swap
      }
    }
  }

  console.timeEnd('mySolution')
  return answer;
}

let a=[1, 3, 8];
let b=[2, 3, 4, 7, 9];
console.log(solution(a, b));
console.log(mySolution(a, b));
