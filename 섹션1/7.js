function solution(day, arr){
  let answer=0;
  let ban = []
  for (let i =0; i< arr.length; i++) {
    if (arr[i] % 10 === day) ban.push(arr[i])
  }

  return ban.length;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
