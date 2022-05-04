/**
 * 思路：定义两个指针，指向首尾两端
 * 此时可以接
 */

var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length-1;
  while(left < right) {
      max = Math.max(Math.min(height[left], height[right]) * (right - left), max);
      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }
  return max;
};