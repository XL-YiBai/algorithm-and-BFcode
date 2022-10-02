/**
  dp[i]到达第i层的最小花费
  第i层可以从i-1和i-2层达到，所以到i层的最小消费，是到i-1和i-2层的最小值
 */
var minCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  // 到楼顶的消费，是达到倒数第一和倒数第二层消费的最小值
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};
