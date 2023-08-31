/** 완전탐색은 전체를 순회하는 방법 **/
function solution(m, product){
  let answer=0;
  let n=product.length;
  // 1. 일단 정렬
  product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
  for(let i=0; i<n; i++){
    // 2. i번째 가격 할인
    let money=m-(product[i][0]/2+product[i][1]);
    let cnt=1;
    // 3. 나머지 상품 구매
    for(let j=0; j<n; j++){
      if(j!==i && (product[j][0]+product[j][1])>money) break; // 4. 예산 초과
      if(j!==i && (product[j][0]+product[j][1])<=money){ // 5. 예산 초과 안되면 cnt 증가.
        money-=(product[j][0]+product[j][1]);
        cnt++;
      }
    }
    answer=Math.max(answer, cnt);
  }
  return answer;
}



function mySolution(m, prodmySct){
  let answer=0;

  product = product.sort((a,b) => {
    if (a[0]+a[1] > b[0] +b[1]) {
      return 1;
    } else {
      return -1;
    }
  })


  for (let i =0 ; i < product.length; i++) {

  }

  return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
console.log(mySolution(28, arr));
