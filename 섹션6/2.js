


function solution(s){
  let answer;
  let stack=[];
  for(let x of s){
    if(x===')'){
      // ')'를 만나면 '('를 만날때까지 Stack에서 제거
      while(stack.pop()!=='(');
    }
    else stack.push(x); // ')'가 아닐때 모두 스택에 push
  }
  answer=stack.join('');
  return answer;
}

function mySolution(s){
  let answer = '';
  const stack = [];

  for (const c of s) {

    // '(' 라면 stack에 Push
    if (c === '(') {
      stack.push(c)
    } else if (c === ')') { // ')' 라면 stack에 Pop
      stack.pop()
    } else {
      // Stack의 갯수가 0일때만 result에 붙여넣음
      if (stack.length === 0) {
        answer = answer + c;
      }
    }
  }
  return answer
}


function mySolution(s){
  let answer;
  const stack = []
  return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
