function mySolution(n, arr){
  console.time('mySolution')
  let answer;
  // let max = Number.MIN_SAFE_INTEGER;
  const sumOfArr = []
  const sumOfMaxArr = []

  // 각 자리수의 합을 구함
  for (let i = 0; i < arr.length; i ++ ) {
    const num = arr[i] + ''

    let total = 0;
    for (let j = 0; j < num.length; j ++) {
      total += parseInt(num[j])
    }

    sumOfArr[i] = total
  }

  const max = Math.max(...sumOfArr)

  for (let i = 0; i < arr.length; i ++ ) {
    const num = arr[i] + ''

    let total = 0;
    for (let j = 0; j < num.length; j ++) {
      total += parseInt(num[j])
    }

    if (total === max) {
      sumOfMaxArr.push(arr[i])
    }
  }

  answer = Math.max(...sumOfMaxArr)

  console.timeEnd('mySolution')
  return answer;
}

function solution(n, arr){
  console.time('solution')
  let answer, max=Number.MIN_SAFE_INTEGER;
  for(let x of arr){
    let sum=0, tmp=x;
    while(tmp){
      sum+=(tmp%10);
      tmp=Math.floor(tmp/10);
    }
    if(sum>max){
      max=sum;
      answer=x;
    }
    else if(sum===max){
      if(x>answer) answer=x;
    }
  }
  console.timeEnd('solution')
  return answer;
}


let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(mySolution(7, arr));
console.log(solution(7, arr));
