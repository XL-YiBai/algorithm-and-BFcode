/**
 * 原数组是正负数都有，递增的
 * 要求把原数组各项平方之后，组成一个新的递增数组输出。
 */

// 方法一：暴力，先平方，再排序   O(n + nlog n)
var sortedSquares = function (nums) {
  let arr = nums.map((item) => item * item);
  arr.sort((a, b) => {
    return a - b;
  });
  return arr;
};

// 方法二：双指针     O(n)
/* 
因为原数组是排序的，比如(-5, -2, 0, 2, 6)，各项平方之后的最大值只可能在两端，不可能在中间
此时可以考虑双指针法了，i指向起始位置，j指向终止位置。
定义一个新数组result，和A数组一样的大小，让k指向result数组终止位置。
如果A[i] * A[i] < A[j] * A[j] 那么result[k--] = A[j] * A[j]; 。
如果A[i] * A[i] >= A[j] * A[j] 那么result[k--] = A[i] * A[i]; 。
*/

var sortedSquares = function (nums) {
  const result = new Array(nums.length);
  let L = 0;
  let R = nums.length - 1;
  let k = R; // 定义一个k指向result数组末尾，每次都把平方后的最大值放在k处
  while (L <= R) {
    if (nums[L] * nums[L] < nums[R] * nums[R]) {
      result[k] = nums[R] * nums[R];
      R--;
      k--;
    } else {
      result[k] = nums[L] * nums[L];
      L++;
      k--;
    }
  }
  return result;
};
