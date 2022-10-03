/**
 * 01背包问题：一个元素只能取一次或者不取，本题中我们nums中的元素只能取一次，本题要求集合里能否出现总和为 sum / 2 的子集。
    背包的体积为sum / 2
    背包要放入的商品（集合里的元素）重量为 元素的数值，价值也为元素的数值
    背包如果正好装满，说明找到了总和为 sum / 2 的子集。
    背包中每一个元素是不可重复放入。
 * 
 * dp[j]表示 背包总容量是j，最大可以放下j的数字子集总和为dp[j]。
 * 本题，相当于背包里放入数值，那么物品i的重量是nums[i]，其价值也是nums[i]。
 */

var canPartition = function (nums) {
  // 求出nums数组的所有数之和
  const sum = nums.reduce((pre, next) => {
    return pre + next;
  }, 0);
  // 如果和是奇数，不可能分成相等的两半整数，return false
  if (sum % 2 == 1) return false;

  // 初始化dp数组各项为0
  const dp = new Array(sum / 2 + 1).fill(0);
  // 遍历所有的nums
  for (let i = 0; i < nums.length; i++) {
    // 遍历背包大小，从大遍历到当前数字的大小，因为数字大小在这里就是重量，背包空间小于这个重量就不能放了
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      // 如果有背包的数字和正好是所有和的一半，说明满足题意可以均分
      if (dp[j] == sum / 2) {
        return true;
      }
    }
  }

  // 遍历完之后，如果最后一个背包都不满足，说明都没找到dp[j] == sum/2，就return false
  return false;
};
