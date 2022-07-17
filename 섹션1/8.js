function solution(arr){
  let answer=[];
  let max = 0
  let randomPick = []

  while (max !== 100) {
    const random = Math.floor(Math.random() * arr.length);
    if (randomPick.findIndex((item) => item === random) === -1) {
      randomPick.push(random)
      max += arr[random]
      answer.push(arr[random])
    }

    if (randomPick.length === arr.length) {
      if (max === 100) {
        break;
      }
      max = 0
      randomPick = []
      answer = []
    }
  }

  return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
