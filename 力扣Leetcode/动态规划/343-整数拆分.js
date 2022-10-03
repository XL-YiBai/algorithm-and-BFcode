/**
 * dp[i]表示整数i拆成若干个整数的乘积最大值，比如dp[3]，3可以拆成1*2、1*1*1，最大值就是2，所以dp[3]=2
 * dp[i]的递推公式为：dp[i] = Math.max(dp[i], j*(i-j), j*dp[i-j])，
 * dp[i]表示当前保存的值，因为随着for循环进行，会计算出来不同的dp[i]。
 * j*(i-j)表示只拆分成两个数乘积，j*dp[i-j]表示继续拆分成若干个数的乘积
 *
 * for循环从1到i-1，把i拆分成j和i-j
 */

var integerBreak = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[2] = 1; // 初始化

  // 从dp[3]开始计算到dp[n];
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      // 这里要把上一次循环计算出来的dp[i]和当前循环计算的j*(i-j)和j*dp[i-j]做比较，取最大值
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }

  return dp[n];
};
