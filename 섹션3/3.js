function solution(str){
  let answer="";
  for(let x of str){
    if(!isNaN(x)) answer+=x;
  }
  return parseInt(answer);
}

function mySolution(s){

  let result = '';
  for (let i =0; i< s.length; i++) {
    if (!isNaN(s[i])) {
      result = result + s[i]
    }
  }

  return parseInt(result);
}

const str="g0en2T0s8eSoft";
console.log(solution(str));
console.log(mySolution(str));
