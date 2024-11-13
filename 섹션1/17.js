
function removeDuplicate(s) {
  let answer = "";
  for (let i =0 ; i< s.length ; i++) {
    console.log(s[i], i , s.indexOf(s[i]))
    if (s.indexOf(s[i]) === i) answer+=s[i]
  }

  return answer
}

console.log(removeDuplicate('keskkset'))

// for 루프 내에서 indexOf가 한 번씩 호출 => O(n^2) 의 시간복잡도
// 복이 제거된 문자를 저장하므로, 최악의 경우 모든 문자가 고유한 경우 최대 O(n)의 공간을 차지 => O(n)의 공간 복잡도
