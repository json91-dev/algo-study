/**
 *
 * 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하 세요.
 * 아나그램 판별시 대소문자가 구분됩니다.
 * 부분문자열은 연속된 문자열이어야 합니다.
 *
 * 입력설명
 * 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
 * S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
 *
 * 출력설명
 * S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다
 *
 *
 * 입력예제
 * bacaAacba abc
 * 출력예제
 * 3
 */

function compareMaps(map1, map2){
  if(map1.size!==map2.size) return false;
  for(let [key, val] of map1){
    if(!map2.has(key) || map2.get(key)!==val) return false;
  }
  return true;
}
function mySolution(s, t){
  let answer = '';
  
  
  
  
  return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));