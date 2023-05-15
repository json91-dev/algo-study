// 이진 트리 => 왼쪽자식, 오른쪽자식
// 왼쪽 자식 = 부모 * 2
// 오른쪽 자식 = 부모 * 2 + 1
// 전위 순회 : 부모, 왼쪽, 오른쪽
// 중위 순회 : 왼쪽자식 부모 오른쪽 자식
// 후위 순회 : 왼쪽 오른쪽 부모


function solution(n){
  let answer="";
  function DFS(v){
    if(v>7) return;
    else{
      answer+=(v+' '); // 전위
      DFS(v*2); // 중위
      // answer+=(v+' '); // 중위
      DFS(v*2+1);
      // answer+=(v+' '); // 후위
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
