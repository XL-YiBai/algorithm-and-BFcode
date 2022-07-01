/**
 * 自己思路：
 * 1. dfs遍历，传入下一个坐标和当前的arr数组，
 * 2. 把数组调用toString转为字符串存入set中，用于去重   比如[4,6,7,7]，在递归时会出现两个[4,7]数组，需要去重
 * 3. 因为每个位置都可以作为子序列的开头（递归起点），所以for循环遍历每个位置依次调用dfs启动递归
 */

 var findSubsequences = function(nums) {
  const ans = []; 
  const set = new Set(); // set用于对结果去重

  // 递归函数，idx为遍历的坐标，arr为当前子序列数组
  const dfs = (idx, arr) => {
      if (idx>nums.length-1) return; // 下标溢出，return
      if (nums[idx] >= arr[arr.length-1]) { // 如果当前位置的数比子序列最后一个大，说明加入之后依然是递增子序列
          let temp = [...arr, nums[idx]]; // 加入当前数生成新的数组
          let str = temp.toString(); // 调用toString转为字符串，结合set判断是否已经有重复子序列
          // 如果不重复，把当前字符串加入set，并把子序列推入ans
          if (!set.has(str)) { 
              set.add(str);
              ans.push(temp);
          }
          dfs(idx+1, arr); // 1. 跳过当前数直接递归下一个位置
          dfs(idx+1, temp);// 2. 把加入当前数的数组传入遍历下一个位置
      } else {
          dfs(idx+1, arr);
      }
  }

  for (let i=0; i<nums.length; i++) {
      dfs(i+1, [nums[i]])
  }
  return ans;
};