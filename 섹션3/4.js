function solution(s, t){
  let answer=[];
  let p=1000;
  for(let x of s){
    if(x===t){
      p=0;
      answer.push(p);
    }
    else{
      p++;
      answer.push(p);
    }
  }
  p=1000;
  for(let i=s.length-1; i>=0; i--){
    if(s[i]===t) p=0;
    else{
      p++;
      answer[i]=Math.min(answer[i], p);
    }
  }
  return answer;
}

function MySolution(s, t){
  let answer=[];

  const stack = [];

  for (let i =0; i< s.length; i++) {
    if (s[i] === t) {
      stack.push(i)
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t) {
      const distances = []
      for (let j = 0; j < stack.length; j++) {
        distances.push(Math.abs(stack[j] - i))
      }
      answer.push(Math.min(...distances))

    } else {
      answer.push(0)
    }
  }

  return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));
console.log(MySolution(str, 'e'));
