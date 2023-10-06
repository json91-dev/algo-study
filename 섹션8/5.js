
function hasDuplicate(arr) {
    return arr.some((value, index) => arr.indexOf(value) !== index);
}

function mySolution(arr) {
    const ch = Array.from({length: arr.length}, () => 0)
    const sumArr = [];

    function DFS(L) {
        if(L === arr.length){
            let sum = 0;
            let tmp = ''
            for (let i = 0; i < arr.length; i++) {
                if (ch[i] === 1) {
                    sum += arr[i]
                }
            }

            sumArr.push(sum)
        } else {
            ch[L] = 1
            DFS(L + 1)
            ch[L] = 0
            DFS(L + 1)
        }
    }

    DFS(0)
    if (hasDuplicate(sumArr)) {
        return 'YES'
    } else {
        return 'NO'
    }
}
const input = [1, 3, 5, 6, 7, 10];
console.log(mySolution(input))


function solution(arr){
    let answer="NO", flag=0;
    let total=arr.reduce((a, b)=>a+b, 0);
    let n=arr.length;
    function DFS(L, sum){
        if(flag) return;
        if(L===n){
            if((total-sum)===sum){
                answer="YES";
                flag=1;
            }
        }
        else{
            DFS(L+1, sum+arr[L]);
            DFS(L+1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));
