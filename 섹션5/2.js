/** 공통원소 구하기 **/
/** A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요. **/

function solution(arr1, arr2){
  let answer=[];
  let p1, p2;
  p1=p2=0;
  
  // 먼저 arr1과 arr2를 정렬시킨다.
  arr1.sort();
  arr2.sort();
  
  // p1 포인터와 p2포인터가 arr1, arr2의 크기보다 작을때 반복문을 계속 수행한다.
  while(p1<arr1.length && p2<arr2.length){
    // p1포인터의 값과 p2포인터의 값이 같으면 result에 추가한다.
    // 이후 p1과 p2를 하나씩 증가시킨다.
    if(arr1[p1]==arr2[p2]){
      answer.push(arr1[p1++]);
      p2++;
    }
    
    // 만약 p1과 p2가 다르면 p1 포인터, p2포인터의 값을 비교후 더 작은 값의 pointer를 1개 증가시킨다.
    else if(arr1[p1]<arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

function mySolution(arr1, arr2){
  let answer=[];
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  for (let i =0; i < arr1.length -1 ; i ++) {
    for (let j =0; j < arr2.length -1 ; j ++) {
      if (arr1[i] === arr2[j]) {
        answer.push(arr2[j])
      }
    }
  }

  return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a,b))
console.log(mySolution(a, b));
