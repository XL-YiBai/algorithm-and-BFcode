/**
 * 题目要求连续子数组和 >= target  的子数组最小长度
 * 双指针法：定义左右指针，sum保存左右指针之间的和，[l, r) 左闭右开
 * 外层while循环每次右指针右移动，并更新sum
 * 如果满足条件 sum>=target 了，就进入内层while循环，更新ans答案值，并左指针右移，更新sum，
 * 如果减少了还是sum>=targe就继续走while，直到sum<target再回到外侧循环
 */

var minSubArrayLen = function (target, nums) {
  if (target === nums[0]) return 1;
  let l = 0; // 左指针
  let r = 0; // 右指针
  let sum = 0; // 和
  let ans = nums.length + 1; // 子数组最大不会超过自身

  while (r < nums.length) {
    sum += nums[r];
    r++;

    while (sum >= target) {
      ans = Math.min(ans, r - l); // 在每次满足sum>=target时，都更新ans，取ans和当前范围r-l的最小值
      sum -= nums[l];
      l++;
    }
  }

  // ans初始化为数组长度+1，如果ans没改变，说明没有这样的子数组 达到sum>=target
  if (ans > nums.length) {
    return 0;
  } else {
    return ans;
  }
};
