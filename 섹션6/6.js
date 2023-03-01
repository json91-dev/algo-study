function mySolution(n, k){
  let answer;
  const queue = Array.from(new Array(n), (x, i) => i + 1)

  for (let i =1; i<= n.length; i++) {
    queue.push(n[i])
  }

  let count = 0;
  while(queue.length !== 1) {
    count++
    if (count === k) {
      count = 0
      queue.shift()
    } else {
      const item = queue[0]
      queue.shift()
      queue.push(item)
    }
  }
  answer = queue[0]

  return answer;
}

function solution(n, k){
  let answer;
  let queue=Array.from({length:n}, (v, i)=>i+1);
  while(queue.length){
    for(let i=1; i<k; i++) queue.push(queue.shift());
    queue.shift();
    if(queue.length===1) answer=queue.shift();
  }
  return answer;
}


console.log(mySolution(8, 3));
console.log(solution(8, 3));
