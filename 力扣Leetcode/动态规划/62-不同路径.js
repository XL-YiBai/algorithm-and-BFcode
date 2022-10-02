/**
 * dp[i][j]表示从起始位置(0,0)到(i,j)的路径数，
 * 因为只能从左到右或者从上到下，所以dp[i][j] = dp[i-1][j] + dp[i][j-1];
 * 初始化数据，第一行位置只能从初始位置从左到右，只有一种路径，同理第一列的数据只能从初始位置从上往下，一条路径
 * 因此，初始化把第一行和第一列都初始化为1
 * 遍历时，一行行遍历就行，因为每个位置都基于左边和上面，可以保证都有值
 */

var uniquePaths = function (m, n) {
  const dp = new Array(m);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n);
  }
  // 初始化数据，第一行和第一列都初始化为1
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let i = 0; i < n; i++) dp[0][i] = 1;

  // 从(1,1)开始，逐行遍历
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // 最后一个位置，就是从初始位置到这的路径数
  return dp[m - 1][n - 1];
};
