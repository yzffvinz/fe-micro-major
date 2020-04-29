/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = (text1, text2) => {
  function dp(i, j) {
    if (i === -1 || j === -1) {
      return 0;
    } else if (text1[i] === text2[j]) {
      return dp(i - 1, j - 1) + 1;
    } else {
      return Math.max(dp(i - 1, j), dp(i, j - 1));
    }
  }
  return dp(text1.length - 1, text2.length - 1);
};
