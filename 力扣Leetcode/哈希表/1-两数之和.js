/**
 * 二刷：使用map记录遍历过的数，用键名表示该数字，用值表示下标
 * 每遍历一个数n的时候，去map里面找是否有target-n，
 * 如果有，就配对成功，这两个数加起来就是target，返回他们下标
 * 如果没有，就把当前数存到map里面
 */

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
  }
};
