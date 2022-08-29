/**
 * 二刷三数之和
 * 思路：先从小到大排序，再遍历每一个数，
 * 在这个数右边剩下的数字中，使用L左指针从开始，R右指针指向结束，依次取值
 * 如果相加等于0，推入ans中，且左指针移动到右边第一个不等于当前值的位置，右指针移动到左边第一个不等于当前值的位置，目的是去重
 * 如果相加小于0，左指针右移动一个，增大左指针数值，相加大于0，右指针左移动一个，，减小右指针数值
 * while循环结束后，新一轮要把i移动到第一个不等于当前值的位置，也是去重，，如果nums[i]===nums[i-1]，直接continue
 */

var threeSum = function (nums) {
  const ans = [];
  nums.sort((a, b) => {
    // 先从小到大排序
    return a - b;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let L = i + 1;
    let R = nums.length - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        // 如果L的后一个值跟当前值一样，直接右移
        while (L < R && nums[L] == nums[L + 1]) L++;
        // 如果R前一个跟当前值一样，直接左移
        while (L < R && nums[R] == nums[R - 1]) R--;
        // 保证跳过重复值之后，再移动到下一个就是不重复的值了
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      }
    }
  }
  return ans;
};
