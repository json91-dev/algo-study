
/**
 * k 명까지의 합을 구한뒤, 뒤에서 한명을 더하고 앞에서 한명을 뺀다.
 **/
function solution(k, arr){
  console.time('solution')
  let answer, sum=0;
  for(let i=0; i<k; i++) sum+=arr[i];
  answer=sum;
  for(let i=k; i<arr.length; i++){
    sum+=(arr[i]-arr[i-k]);
    answer=Math.max(answer, sum);
  }

  console.timeEnd('solution')
  return answer;
}


function mySolution(k, arr){
  console.time('mySolution')
  let answer = 0, sum=0;

  for (let j =0; j < arr.length - k; j++) {
    sum = 0;

    for (let i = j; i < j + k ; i ++) {
      sum += arr[i]
    }

    if (answer <= sum) {
      answer = sum
    }
  }

  console.timeEnd('mySolution')
  return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
console.log(mySolution(3, a));
