function solution(arr){
  let answer=[];
  let sortArr=arr.slice();
  sortArr.sort((a, b)=>a-b);
  for(let i=0; i<arr.length; i++){
    if(arr[i]!==sortArr[i]) answer.push(i+1);
  }
  return answer;
}

function mySolution(arr){
  let answer=[];

  for (let i = 0; i< arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      // 뒤에 있는 값이 더 작거나 같으면 현재 값 임시 저장
      const temp = arr[i]
      answer.push(i + 1)

      // 이미 비교한 값은 건너 뛴다. (i + 2)
      for (let j = i + 2; j < arr.length; j++) {
        if (temp <= arr[j]) {
          // 이후 임시로 저장된 값보다 더 크거나 같은 값이 오면 index 저장
          answer.push(j -1 + 1)
        }
      }
      break;
    }
  }

  return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr2=[120, 130, 150, 150, 130, 150];
console.log(mySolution(arr));
console.log(solution(arr));

console.log(mySolution(arr2));
console.log(solution(arr2));
