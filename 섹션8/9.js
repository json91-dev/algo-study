



function mySolution(m, arr){
    let answer=Number.MAX_SAFE_INTEGER;
    const coinKindCount = arr.length;
    let tmp = [];

    function DFS(L) {
        const total = tmp.reduce((a, b) => a + b, 0)
        if (total >= m) {
            if (total === m) {
                if (answer > tmp.length) {
                    answer = tmp.length;
                }
            }
            tmp.pop()
        } else {
            for (let i = 0 ; i < arr.length; i++) {
                tmp[L] = arr[i]
                DFS(L+1)
            }
        }
    }

    console.time('2')
    DFS(0)
    console.timeEnd('2')

    return answer;
}


function solution(m, arr){
    let answer=Number.MAX_SAFE_INTEGER;
    let n=arr.length;
    function DFS(L, sum){
        if(sum>m) return;
        if(L>=answer) return;
        if(sum===m){
            answer=Math.min(answer, L);
        }
        else{
            for(let i=0; i<n; i++){
                DFS(L+1, sum+arr[i]);
            }
        }
    }
    console.time('1')
    DFS(0, 0);
    console.timeEnd('1')

    return answer;
}

let arr=[1, 2, 5];


console.log(solution(15, arr));
console.log(mySolution(15, arr));



