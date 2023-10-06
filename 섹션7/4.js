function solution(arr){
  let answer=arr;
  for(let i=0; i<arr.length; i++){
    let tmp=arr[i], j;
    // 먼저 삽입될 위치를 정해준다.
    for(j=i-1; j>=0; j--){
      // 위치가 정해질때까지 원소들을 뒤로 1칸씩 이동시킨다.
      if(arr[j]>tmp) arr[j+1]=arr[j];
      else break;
    }
    // 삽입될 위치가 정해지면 원소를 교환한다.
    arr[j+1]=tmp;
  }
  return answer;
}

function testSolution(arr) {
  let answer = arr;
  for (let i =0 ; i < arr.length; i++) {
    const tmp = arr[i] // 현재 타겟
    let j
    for (j = i - 1; j >=0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j]
      } else {
        break;
      }
    }

    arr[j + 1] = tmp
  }

  return answer;
}

function mySolution(arr){
  let answer=arr;

  // 틀림 => 이렇게 하면 버블 정렬처럼되어버림, 배열의 교환이 계속 일어나기 때문..
  for (let i = 1; i < arr.length; i ++) {
    for (let j = i; j > 0 ; j--) {
      if (arr[j -1] > arr[j]) {
          [arr[j -1], arr[j]] = [arr[j], arr[j -1]]
      }
    }
  }
  return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(testSolution(arr))
// console.log(solution(arr));
// console.log(mySolution(arr));

