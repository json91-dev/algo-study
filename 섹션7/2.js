function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
      if(arr[j]>arr[j+1]){
        [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
      }
    }
  }
  return answer;
}

function mySolution(arr){
  let answer=arr;

  for (let i =0; i < arr.length; i++) {
    for (let j = 0; j < arr.length -i; j ++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }

  return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));
console.log(mySolution(arr));
