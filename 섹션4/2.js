function isPrime(num){
  let divideCount = 0;
  for (let i =1; i <= num; i++) {
    if (num % i === 0) {
      divideCount++
    }
  }

  if (divideCount === 2) {
    return true
  } else {
    return false
  }
}
function solution(arr){

}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
