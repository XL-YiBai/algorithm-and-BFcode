/**
 * @param {number} n
 * @return {number[][]}
 */

/**
  根据题目模拟生成螺旋数组，定义四个方向，依次给矩阵位置添加值，因为最后一个数是n*n，所以循环条件是num<=n*n
  初始化矩阵每一个数都是-1，如果当前超出边界，或者已经赋值过(不等于-1就是已经赋值过)，就改变方向继续循环
 */
var generateMatrix = function (n) {
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(new Array(n).fill(-1));
  }
  let num = 1;
  let max = n * n;
  let i = 0; // 行
  let j = 0; // 列
  let direction = 1;
  while (num <= max) {
    switch (direction) {
      case 1: // 从左到右
        ans[i][j] = num;
        j++;
        // 如果下一个位置超出二维数组，或者已经赋过值，就改变方向
        if (j >= n || ans[i][j] != -1) {
          j--;
          i++;
          direction = 2;
        }
        break;
      case 2: // 从上到下
        ans[i][j] = num;
        i++;
        // 如果下一个位置超出二维数组，或者已经赋过值，就改变方向
        if (i >= n || ans[i][j] != -1) {
          i--;
          j--;
          direction = 3;
        }
        break;
      case 3: // 从右到左
        ans[i][j] = num;
        j--;
        // 如果下一个位置超出二维数组，或者已经赋过值，就改变方向
        if (j < 0 || ans[i][j] != -1) {
          j++;
          i--;
          direction = 4;
        }
        break;
      case 4: // 从下到上
        ans[i][j] = num;
        i--;
        // 如果下一个位置超出二维数组，或者已经赋过值，就改变方向
        if (i < 0 || ans[i][j] != -1) {
          i++;
          j++;
          direction = 1;
        }
        break;
      default:
        break;
    }
    num++;
  }
  return ans;
};
