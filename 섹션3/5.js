function solution(s){
  let answer="";
  let cnt=1;
  s=s+" ";
  for(let i=0; i<s.length-1; i++){
    if(s[i]===s[i+1]) cnt++;
    else{
      answer+=s[i];
      if(cnt>1) answer+=String(cnt);
      cnt=1;
    }
  }
  return answer;
}


function mySolution(s){
  let answer = '';

  let count = 1;
  for (let i = 0; i < s.length ; i ++) {
    if (s[i] !== s[i + 1]) {
      answer += `${s[i]}${count}`
      count = 1
    } else {
      count++
    }
  }
  return answer;
}


console.log(solution(str));
console.log(mySolution(str));

