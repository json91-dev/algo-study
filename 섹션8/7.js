
function solution(m, ps, pt){
    let answer=Number.MIN_SAFE_INTEGER;
    let n=ps.length;
    function DFS(L, sum, time){
        if(time>m) return;
        if(L===n){
            answer=Math.max(answer, sum);
        }
        else{
            DFS(L+1, sum+ps[L], time+pt[L]);
            DFS(L+1, sum, time);
        }
    }

    DFS(0, 0, 0);
    return answer;
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));


// pt: 시간 / ps: 점수
function mySolution(m, ps, pt){
    const timeSlot = Array.from({length: ps.length}, () => 0)
    const scoreSlot = Array.from({length: ps.length}, () => 0)

    let maxScore = 0;
    function DFS(N) {
        // console.log(N)
        // // 점수 초과시
        // const totalTime = timeSlot.reduce((a,b) => a + b)
        //
        // if (totalTime > m) {
        //     let totalScore = scoreSlot.reduce((a, b) => a + b)
        //     totalScore = totalScore - scoreSlot[N]
        //     if (totalScore > maxScore) maxScore = totalScore
        //
        //     return ;
        // }


        if (N >= scoreSlot.length) {
            console.log(N)
            let totalTime = 0;
            for (let i = 0 ; i < timeSlot.length; i++) {
                if (timeSlot[i] === 1) {
                    totalTime+= pt[i]
                }
            }

            let totalScore = 0;
            if (totalTime <= m) {
                for (let i = 0 ; i < scoreSlot.length; i++) {
                    if (scoreSlot[i] === 1) {
                        totalScore+= ps[i]
                    }
                }
            }
            if (totalScore > maxScore) maxScore = totalScore

        } else {
            scoreSlot[N] = 1
            timeSlot[N] = 1
            DFS(N+1)
            scoreSlot[N] = 0
            timeSlot[N] = 0
            DFS(N+1)
        }

    }

    DFS(0)

    return maxScore;

}

console.log(mySolution(20, ps, pt));
