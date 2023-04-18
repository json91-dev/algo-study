function count(stable, dist){
  let cnt=1;

}
function solution(c, stable){
  let answer;

  stable.sort((a, b) => a - b)
  let lt = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < stable.length; i++) {
    if (lt > stable[i] - stable[i -1]) {
      lt = stable[i] - stable[i -1]
    }
  }

  let rt =

  while (rt >= lt) {

  }
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));
