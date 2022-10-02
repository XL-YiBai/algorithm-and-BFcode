/**
 * dp[i][j]和不同路径I 一样，都是从(0,0)到(i,j)的路径条数
 *
 * 有关初始化：
 * 因为从(0, 0)的位置到(i, 0)的路径只有一条，所以dp[i][0]一定为1，dp[0][j]也同理。
 * 但如果(i, 0) 这条边有了障碍之后，障碍之后（包括障碍）都是走不到的位置了，所以障碍之后的dp[i][0]应该还是初始值0。
 * (1, 1, 1, 障碍, 0, 0)。
 *
 *
 */

var uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length; // 行
  const col = obstacleGrid[0].length; // 列
  const dp = new Array(row);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(col).fill(0);
  }
  // 初始化dp数组
  for (let i = 0; i < row; i++) {
    if (obstacleGrid[i][0] == 1) break;
    dp[i][0] = 1;
  }
  for (let i = 0; i < col; i++) {
    if (obstacleGrid[0][i] == 1) break;
    dp[0][i] = 1;
  }

  // 遍历
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      // 如果这个位置有障碍，就到不了这个位置，把这个位置的dp设为0，即(0,0)到当前位置没有路径
      if (obstacleGrid[i][j] == 1) {
        dp[i][j] = 0;
      } else {
        // 否则没有障碍的话，就是上方和左方的路径数之和
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[row - 1][col - 1];
};
