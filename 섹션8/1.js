function mySolution(n){
  if (n > 0) {
    mySolution(n -1)
    console.log(n)
  }
}

function solution(n){
  function DFS(L){
    if(L==0) return;
    else{
      DFS(L-1);
      console.log(L);
    }
  }
  DFS(n);
}

mySolution(3);
solution(3);
