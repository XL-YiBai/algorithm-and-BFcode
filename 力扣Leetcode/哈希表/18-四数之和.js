/**
    思路：和三数之和一样，只不过三数之和是一个for循环内使用双指针，
    而这里有四个数，需要在两层for循环里面使用双指针，
    第一层是i，从0开始遍历，第二层是j，从i+1开始遍历，
    双指针初始位置为j+1和nums.length-1，每次找到四个数和为target，push进ans数组，然后把双指针位置去重，
    在第二次for循环之后，也要把for循环的i和j的位置去重
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => {
    return a - b;
  });
  let ans = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重，避免两次循环，i指向的值相同
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // 去重，避免两次循环，j指向的值相同
      let L = j + 1;
      let R = nums.length - 1;
      while (L < R) {
        let sum = nums[i] + nums[j] + nums[L] + nums[R];
        if (sum === target) {
          // 找到满足条件的四个数，推入ans数组
          ans.push([nums[i], nums[j], nums[L], nums[R]]);
          while (L < R && nums[L] === nums[L + 1]) L++; // 去重
          while (L < R && nums[R] === nums[R - 1]) R--; // 去重
          L++;
          R--;
        } else if (sum < target) {
          // 如果和小于target，左指针右移
          L++;
        } else if (sum > target) {
          // 如果和大于target，右指针左移
          R--;
        }
      }
    }
  }
  return ans;
};
