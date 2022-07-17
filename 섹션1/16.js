function solution1(s){
  let answer="";
  const set = [...new Set(s)]

  for (let i =0; i < set.length; i++ ) {
    answer +=set[i]
  }

  return answer;
}

function solution(s){
  let answer="";
  //console.log(s.indexOf("K"));
  for(let i=0; i<s.length; i++){
    //console.log(s[i], i, s.indexOf(s[i]));
    if(s.indexOf(s[i])===i) answer+=s[i];
  }
  return answer;
}


// console.log(solution1("ksekkset"));


// const array = ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D'];
// console.log(array);	// ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D']
//
// let result = array.filter((v, i) => {
//   console.log(array.indexOf(v), i)
//   return array.indexOf(v) === i
// });
// console.log(result);	// ['C', 'A', 'B', 'D', 'E']

const array = ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D'];
// console.log(array);	// ['C', 'A', 'B', 'A', 'C', 'D', 'C', 'C', 'E', 'D']

let result = array.reduce((ac, v) => {
  console.log(ac)
  console.log(v)
  console.log(ac.includes(v) ? ac : [...ac, v])

  return ac.includes(v) ? ac : [...ac, v]
}, []);
console.log(result);	// ['C', 'A', 'B', 'D', 'E']


// https://jsikim1.tistory.com/227
