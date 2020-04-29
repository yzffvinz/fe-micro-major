function pick(str, now, n, index, arr) {
  if (n === 1) {
    for (let i = index; i < str.length; i++) {
      arr.push(now + str[i]);
    }
  } else if(n > 1) {
    for (let i = index; i < str.length; i++) {
      let nnow = now + str[i];
      pick(str, nnow, n - 1, i + 1, arr);
    }
  }
}

function commonLength(long, sub) {
  let subIndex = 0;
  for (let i = 0; i < long.length; i++) {
    if (long[i] === sub[subIndex]) subIndex++;
  }
  return subIndex;
}

const longestCommonSubsequence = (str1, str2) => {
  let long = str1.length >= str2.length ? str1 : str2;
  let short = long === str1 ? str2 :str1;
  let max = 0;

  for (let n = 1; n <= short.length; n++) {
    let composeArr = [];
    pick(short, '', n, 0, composeArr);
    composeArr.forEach(sub => {
      const cLength = commonLength(long, sub);
      max = max < cLength ? cLength : max;
    })
  }
  return max;
};

console.log(longestCommonSubsequence("jgtargjctqvijshexyjcjcre", "pyzazexujqtsjebcnadahobwf"));
