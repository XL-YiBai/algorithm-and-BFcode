/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 第一个想到的暴力方法，直接创建一个numRows行，1000列的矩阵去模拟Z形式变换，
// 初始化每个位置都是-1，然后依次填入字符，最后全部遍历一次，碰到-1跳过，如果是字符就添加到res
// 时间消耗只击败5%
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const arr = new Array(numRows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(1000).fill(-1);
  }

  let fangxiang = 1; // 1下，2右上
  let x = 0;
  let y = 0;
  arr[0][0] = s[0];
  for (let i = 1; i < s.length; i++) {
    if (fangxiang === 1) {
      x++;
      arr[x][y] = s[i];
      if (x === numRows - 1) {
        fangxiang = 2;
      }
    } else if (fangxiang === 2) {
      x--;
      y++;
      arr[x][y] = s[i];
      if (x === 0) {
        fangxiang = 1;
      }
    }
  }
};

/**
 * 之后第二个方法在第一个基础优化，创建numRows行，但每一列最开始都是空数组
 * 然后遍历s当列x到0或者最后一行时改变方向，，依次把字母push进x+1行的数组末尾
 * 这样最后遍历的矩阵会比方法一小很多，时间消耗由240ms提升到76ms，击败81.69%
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const arr = [];
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }
  let fangxiang = 1; // 1下，2右上
  let x = 0;
  arr[0].push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (fangxiang === 1) {
      x++;
      arr[x].push(s[i]);
      // 当到底部改变方向
      if (x === numRows - 1) {
        fangxiang = 2;
      }
    } else if (fangxiang === 2) {
      x--;
      arr[x].push(s[i]);
      // 当到顶部改变方向
      if (x === 0) {
        fangxiang = 1;
      }
    }
  }
  let res = "";
  for (let i = 0; i < numRows; i++) {
    arr[i].map((v) => {
      res += v;
    });
  }
  return res;
};
