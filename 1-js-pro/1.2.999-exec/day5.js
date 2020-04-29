/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let rowLength = word1.length + 1;
  let colLength = word2.length + 1;
  let dp = [[]];
  for (let i = 0; i < rowLength; i++) dp[0].push(i);
  for (let i = 1; i < colLength; i++) {
    const row = [i];
    dp.push(row);
    for (let j = 1; j < rowLength; j++) {
      row.push(-1);
    }
  }

  for (let i = 1; i < colLength; i++) {
    for (let j = 1; j < rowLength; j++) {
      let min = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      if (word1[j - 1] === word2[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = min + 1;
      }
    }
  }

  return dp[colLength - 1][rowLength - 1];
};

console.log(minDistance('cee', 'ece'))
console.log(minDistance('zo1o1o1o1o', 'zo'))
