function solution(size, arr){
  let answer=Array.from({length:size}, ()=>0);
  arr.forEach(x => {
    let pos=-1;
    for(let i=0; i<size; i++) if(x===answer[i]) pos=i;
    if(pos===-1){
      for(let i=size-1; i>=1; i--){
        answer[i]=answer[i-1];
      }
    }
    else{
      for(let i=pos; i>=1; i--){
        answer[i]=answer[i-1];
      }
    }
    answer[0]=x;
  });

  return answer;
}

function solution2(size, arr){
  let answer=[];
  arr.forEach(x => {
    let pos=-1;
    for(let i=0; i<size; i++) if(x===answer[i]) pos=i;
    if(pos===-1){
      answer.unshift(x);
      if(answer.length>size) answer.pop();
    }
    else{
      answer.splice(pos, 1);
      answer.unshift(x);
    }

  });

  return answer;
}


function mySolution(size, arr){
  let answer = Array.from({length:size}, ()=>0);

  for (let i =0; i < arr.length; i++) {
    const index = answer.findIndex((item) =>  item === arr[i])
    if (index === -1) {
      for (let j = answer.length -1; j > 0; j--) {
        answer[j] = answer[j -1]
      }
    } else {
      for (let j = index; j > 0; j--) {
        answer[j] = answer[j -1]
      }
    }
    answer[0] = arr[i]
  }

  return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(mySolution(5, arr));
console.log(solution(5, arr));
console.log(solution2(5, arr));
