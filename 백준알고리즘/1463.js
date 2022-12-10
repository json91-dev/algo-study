let count = 0;

function getMinCount(x) {
  count++;
  if (x % 3 === 0) {
    return getMinCount(x/3)
  } else if (x % 2 === 0) {
    return getMinCount(x/2)
  } else if (x !== 1) {
    return getMinCount(x-1)
  } else {
    return;
  }
}

getMinCount(12)
console.log(count)
