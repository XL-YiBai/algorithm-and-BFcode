/**
 * 两块石头相撞之后，剩下两块石头的差值的重量。
 * 因此只要把所有石头尽可能均分成两堆，最后剩下的石头重量就是这两堆石头的差值。
 * 所以转换成01背包问题，背包的重量为重量的一半。尽量塞满背包，就是尽量接近重量的一半。
 * 最后剩下的重量，就是较大的一半减去较小的一半。
 */

var lastStoneWeightII = function (stones) {
  const sum = stones.reduce((pre, next) => pre + next, 0); // 计算石头总重量
  // 背包大小为石头总重量的一半
  const dpLen = Math.floor(sum / 2);
  const dp = new Array(dpLen + 1).fill(0);

  // 遍历所有石头
  for (let i = 0; i < stones.length; i++) {
    // 遍历背包大小，从大到小遍历，避免放入多次。如果正序：比如一个stones[0]重量为1，在dp[1]放了，在dp[2]时会计算dp[2-1] + stones[0]，就放入了两次
    for (let j = dpLen; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  const big = sum - dp[dpLen]; // 因为我们求sum/2时向下取整，所以我们的背包重量小于等于另一半石头，另一半石头重量就是sum-背包重量
  return big - dp[dpLen]; // 两堆石头的差值就是最终剩下的石头的重量
};
