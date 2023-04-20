/**
 * 가까운 두 말의 거리를 미리 설정하고, 해당 값일때 말을 둘수 있는 최대 갯수 반환
 * @param stable 마굿간 배열
 * @param dist 가장 가까운 두 말의 거리
 */
function count(stable, dist){
  let cnt = 1;
  let ep = stable[0] // 마지막으로 말을 배치한 위치
  for (let i =1; i < stable.length; i++) {
    // 설정한 거리보다 더 커야 말을 배치할 수 있음
    if (stable[i] - ep >= dist) {
      cnt++
      ep = stable[i]
    }
  }

  return cnt
}
function solution(c, stable){
  let answer;

  stable.sort((a, b) => a - b)

  let lt = 1 // 두 말의 거리의 최소값 => 내가 찾으려는 말의 최소 거리이기 때문
  let rt = stable[stable.length - 1] // 가장 큰 마굿간의 거리 (가장 먼 말사이의 거리는 마지막 마굿간의 거리보다 클수 없음)

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2)
    // 거리(mid)를 기준으로 말을 배치한 값이 c마리 이상일때, 더 큰 말을 배치할수 있는 거리가 있는지 답쪽을 향해서 다시 찾아감
    if (count(stable, mid) >= c) {
      answer=mid;
      lt=mid+1
    } else { // 거리(mid)를 기준으로 말을 배치할수 없을때 더 작은 거리가 있는지 답쪽을 향해서 다시 찾아감
      rt=mid-1
    }
  }

  return answer
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));
