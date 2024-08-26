/**
 * 方法一：从左向右遍历，依次更新股票最低点，然后依次根据当前股票价格减去历史股票最低点更新最大收入
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0

  let min = prices[0] // 最低买入点
  let max = 0 // 最大收入

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    max = Math.max(max, prices[i] - min)
  }

  return max
}

/**
 * 方法二：先遍历一遍用 leftArr 数组记录每天之前的最低点。
 * 然后再遍历一遍依次计算当天价格和每天之前的最低点做差值，更新最大收入。
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0

  const leftArr = new Array(prices.length)
  leftArr[0] = prices[0]
  let ans = 0

  for (let i = 1; i < prices.length; i++) {
    leftArr[i] = Math.min(leftArr[i - 1], prices[i - 1])
  }

  for (let i = 0; i < prices.length; i++) {
    ans = Math.max(prices[i] - leftArr[i], ans)
  }
  return ans
}
