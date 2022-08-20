/**
 * 题目要求原地改变数组，移除值为val的元素，把其他元素放在数组前面
 * 定义一个cur表示当前数组末尾，只要不等于val的元素就放到cur位置，然后cur++
 * 最终0到cur-1的数据，就是去除掉val后剩下的数组。共有cur个元素。
 */

var removeElement = function (nums, val) {
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[cur] = nums[i];
      cur++;
    }
  }
  return cur;
};
