
function mySolution(str) {
    return str.toUpperCase()
}


let str="ItisTimeToStudy";
console.log(mySolution(str));


function solution(s){
    let answer="";
    for(let x of s){
        let num=x.charCodeAt();
        if(num>=97 && num<=122) { // 97은 a 122는 z, 32를 빼면 대문자 charCode가 나옴
            answer+=String.fromCharCode(num-32);
        }
        else answer+=x;

        //if(x===x.toLowerCase()) answer+=x.toUpperCase();
        //else answer+=x;
    }

    return answer;

}
console.log(solution(str));
