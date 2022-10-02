/**
 * 第i层楼梯，可以由i-1层爬一层达到，也可以由i-2层爬两层达到
 * 因此总共的方法数是到i-1层的方法数 + 到i-2层的方法数
 */

var climbStairs = function (n) {
  const dp = [undefined, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
