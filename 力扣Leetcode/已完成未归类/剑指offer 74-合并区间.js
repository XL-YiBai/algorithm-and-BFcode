/**
 * 思路，先按照区间第一个数从小到大排序，之后遍历，如果遍历的区间首部比之前的区间尾部还小，
 * 说明可以合并区间，反之把之前合并的区间推入res保存
 */

var merge = function(intervals) {
  // 先按照区间第一个数从小到大排序
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  // temp用于保存每次合并的临时区间，因为一个区间合并之后，可能还可以合并。这里初始化为第一个区间
  let temp = intervals[0];
  // 遍历剩余区间
  for (let i=1; i<intervals.length; i++) {
      // 如果区间的第一个数小于等于temp区间的最后一个数，说明可以合并，区间末尾取temp和当前遍历区间末尾的较大者
      if (intervals[i][0] <= temp[1]) {
          temp[1] = Math.max(temp[1], intervals[i][1]);
      // 否则，说明temp区间已经合并完成，推入res中，并将temp赋值为当前遍历的区间，继续往后合并
      } else {
          res.push(temp);
          temp = intervals[i];
      }
  }
  // 因为最后一个区间没有走else逻辑直接结束，所以这里还要单独push一下
  res.push(temp)
  return res;
};