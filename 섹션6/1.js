/**
 * 올바른 괄호
 * 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
 * (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

 * ▣ 입력설명
 * 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.

 * ▣ 출력설명
 * 첫 번째 줄에 YES, NO를 출력한다.
 * ▣ 입력예제 1 (()(()))(()
 * ▣ 출력예제 1 NO
 */

function solution(s){
  let answer="YES";
  const stack=[];
  for(let x of s){
    if(x==='(') stack.push(x);
    else{
      if(stack.length===0) return "NO";
      stack.pop();
    }
  }
  if(stack.length>0) return "NO";
  return answer;
}

function mySolution(s){
  let answer = 'YES'
  const stack = []
  
  for (const c of s) {
    if (c === '(') {
      // 왼쪽 괄호일때는 Stack에 푸시
      stack.push(c)
    } else if (c === ')') {
      if (stack.length > 0) {
        // 스택이 비어있지 않고 오른쪽 괄호가 들어오면 Stack에서 pop
        stack.pop()
      } else {
        answer = 'NO'
        break;
      }
    }
  }

  if (stack.length !== 0) {
    answer = 'NO'
  }

  return answer;
}

let a="(()))(";
console.log(mySolution(a));