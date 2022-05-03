// // 自己思路，先排序，然后从尾部取数，indexOf判断前面是否还有，如果没有，则说明找到(因为题目说其他都是两个两个出现)
// var singleNumber = function(nums) {
//     nums.sort((a, b) => {
//         return a-b;
//     })
//     while (nums.length >= 0) {
//         let temp1 = nums.pop()
//         if (nums.indexOf(temp1, -1) === -1) {
//             return temp1;
//         } else {
//             nums.pop();
//         }
//     }
// };

// 画法题解思路：通过异或求解，a异或a = 0， a异或b异或a = b，所以整体下来，两两相同的数异或都为0，而0异或x = x，就求得只出现一次的数
var singleNumber = function(nums) {
  let ans = 0;
  for(const num of nums) {
      ans ^= num;
  }
  return ans;
};