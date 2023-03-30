// 실패
function mySolution(times){
  let answer=Number.MIN_SAFE_INTEGER;

  let times = times.sort((a, b) => {
    return a[1] - b[1]
  })

  for (let i = times.length; i > 0; i--) {
    answer = times.filter((time) => times[i][1] > time[0] )
  }
  return answer;
}

function solution(times){
  let answer=Number.MIN_SAFE_INTEGER;
  let T_line=[];

  // 먼저 시작시간과 끝시간을 기준으로 Timeline 배열을 만든다
  for(let x of times){
    T_line.push([x[0], 's']);
    T_line.push([x[1], 'e']);
  }

  // 이후 첫번째 시간을 기준으로 정렬한다.
  // 이때 시간이 같다면 end가 start보다 먼저와야한다.
  // 그 이유는 친구들이 나가는 시간은 count하지 않기 때문에 최종 계산시 +1을 먼저하면 오차가 발생하게된다. (먼저 빼줘야함 -1)
  T_line.sort((a, b)=>{
    if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
    else return a[0]-b[0];
  });

  // 최종적으로 시간을 비교하며 최대 cnt값을 계산한다.
  let cnt=0;
  for(let x of T_line){
    if(x[1]==='s') cnt++;
    else cnt--;
    answer=Math.max(answer, cnt);
  }
  return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));
