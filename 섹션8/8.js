

function mySolution (n, m) {

    let tmp = Array.from({length: m})
    function DFS(L) {
        if (L === m) {

        } else {
            for (let i =1; i <= n; i++) {
                DFS(L + 1)
            }
        }

    }
    DFS(1)
    return 0;
}
console.log(mySolution(3, 2));


function solution (n, m) {
    let answer = []
    let tmp = Array.from({length: m}, () => 0)

    function DFS(L) {
        if (L === m) {
            answer.push([...tmp])
        } else {
            for (let i =1; i <= n; i++) {
                tmp[L] = i
                DFS(L + 1)
            }
        }
    }

    DFS(0)

    return answer;
}

console.log(solution(3, 3))
