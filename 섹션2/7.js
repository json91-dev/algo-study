function mySolution(arr){
  let answer = 0;
  const n = arr.length

  console.time('mySolution')
  for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

      let left = 0
      let right = 0
      let top = 0
      let bottom = 0

      if (i -1 >= 0) {
        left = arr[i-1][j]
      }

      if (i + 1 < n) {
        right = arr[i+1][j]
      }

      if (j - 1 >= 0) {
        top = arr[i][j-1]
      }

      if (j + 1 < n) {
        bottom = arr[i][j+1]
      }

      if (arr[i][j] > Math.max(left, right, top, bottom)) {
        answer++
      }
    }
  }

  console.timeEnd('mySolution')

  return answer;
}

function solution(arr){
  console.time('solution')
  let answer=0;
  let n=arr.length;
  let dx=[-1, 0, 1, 0];
  let dy=[0, 1, 0, -1];
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      let flag=1;
      for(let k=0; k<4; k++){
        let nx=i+dx[k];
        let ny=j+dy[k];
        if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
          flag=0;
          break;
        }
      }
      if(flag) answer++;
    }
  }

  console.timeEnd('solution')
  return answer;
}



let arr=[[5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]];

console.log(solution(arr));
console.log(mySolution(arr));
