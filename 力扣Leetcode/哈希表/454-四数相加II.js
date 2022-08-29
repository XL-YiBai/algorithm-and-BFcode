/**
 * 思路：因为[1, 2, -1, -2] 和 [2, 1, -2, -1]，都属于四个数加起来为0，算两个答案，
 * 也就是可以有重复的四个数的情况，
 * 可以先把前两个数组任意取两个数的和保存起来，用Map记录每个和的次数
 * 然后计算后两个数组任意取两个数的和sum，那么0-sum就应该是前两个数组的取值和，map中存了多少次，ans就加多少
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let ans = 0;
  const twoSumMap = new Map();
  for (let v1 of nums1) {
    for (let v2 of nums2) {
      let sum = v1 + v2;
      twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1);
    }
  }
  for (let v3 of nums3) {
    for (let v4 of nums4) {
      let sum = v3 + v4;
      if (twoSumMap.get(0 - sum)) {
        ans += twoSumMap.get(0 - sum);
      }
    }
  }
  return ans;
};
