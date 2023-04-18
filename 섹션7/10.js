function mySolution(target, arr){
  let answer;

  // arr 정렬
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i]
    let j;

    for (j = i -1 ; j >= 0 ; j--) {
      if (arr[j] > key) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j+1] = key
  }

  console.log(arr)

  let lt = 0;
  let rt = arr.length -1

  while(lt<=rt) {
    let mid = parseInt((lt+rt) / 2);
    if (arr[mid] === target) {
      answer = mid +1;
      break
    } else if (arr[mid]> target) {
      rt = mid -1
    } else {
      lt = mid +1;
    }
  }


  return answer;
}

function solution(target, arr){
  let answer;
  // 1. 정렬한다.
  arr.sort((a, b)=>a-b);
  let lt=0, rt=arr.length-1;
  while(lt<=rt){
    // 2. 중앙값을 찾는다.
    let mid=parseInt((lt+rt)/2);

    // 3. 찾는값과 중앙값이 같다면 종료
    if(arr[mid]===target){
      answer=mid+1;
      break;
    }

    // 4. 찾는값보다 중앙값이 크다면 왼쪽범위에서 찾아야하므로 rt에서 1을 뺀다.
    else if(arr[mid]>target) rt=mid-1;

    // 5. 찾는값보다 중앙값이 작다면 오른쪽 범위에서 찾아야하므로 lt에서 1을 더한다.
    else lt=mid+1;
  }

  return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(mySolution(32, arr));
