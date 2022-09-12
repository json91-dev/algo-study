function mySolution(test){
  let answer = 0
  let studentsTotal = test[0].length -1;
  let testTotal = test.length -1;

  for (let i =0 ; i < studentsTotal; i++)  {
    for (let j = studentsTotal - 1; j > i ; j--) {
      let isTeacher = false
      for (let k = 0; k < testTotal; k++) {
        if (test[k][i] > test[k][j]){
          isTeacher = true
        }
      }

      if (isTeacher) {
        answer++
      }
    }
  }
  return answer;
}

function solution(test){
  let answer=0;
  let m;
  let n;
  let pj;

  m=test.length;
  n=test[0].length;
  for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
      let cnt=0;
      for(let k=0; k<m; k++){
        let pi=pj=0;
        for(let s=0; s<n; s++){
          if(test[k][s]===i) pi=s;
          if(test[k][s]===j) pj=s;
        }
        if(pi<pj) cnt++;
      }
      if(cnt===m) answer++;
    }
  }
  return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(mySolution(arr));
