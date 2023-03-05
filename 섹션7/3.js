function mySolution(arr){
  let answer=arr;

  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length - i; j ++) {
      // Bubble Soring 중, 앞의 값이 양수, 뒤에 값이 음수 일때만 값을 바꿔줌
      if (Math.sign(arr[j]) > Math.sign(arr[j+1])) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }

  return answer;
}

function solution1(arr){
  let answer=arr;
  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
      if(arr[j]>0 && arr[j+1]<0){
        [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
      }
    }
  }
  return answer;
}

function solution2(arr){
  let answer=[];
  for(let x of arr){
    if(x<0) answer.push(x);
  }
  for(let x of arr){
    if(x>0) answer.push(x);
  }
  return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(mySolution(arr));
console.log(solution1(arr));
console.log(solution2(arr));
