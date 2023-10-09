
function mySolution(max, arr) {
    const ch = Array.from({length: arr.length}, () => 0);
    const sumArr = []

    function DFS(n) {
        if (arr.length === n) {
            let sum = 0;
            for (let i =0 ; i <= arr.length; i ++) {
                if (ch[i] === 1) {
                    sum += arr[i]
                }
            }
            sumArr.push(sum)
        } else {
            ch[n] = 1
            DFS(n + 1)
            ch[n] = 0
            DFS(n + 1)
        }
    }

    DFS(0)
    return Math.max(...sumArr.filter((item) => item <= max))
}

console.log(mySolution(259, [81, 58, 42, 33 , 61]))

function solution(c, arr){
    let answer=Number.MIN_SAFE_INTEGER;
    let n=arr.length;
    function DFS(L, sum){
        if(sum>c) return; // 재귀도 뻗지 못하게. 막아버림.
        if(L===n){
            answer=Math.max(answer, sum);
        }
        else{
            DFS(L+1, sum+arr[L]);
            DFS(L+1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));
