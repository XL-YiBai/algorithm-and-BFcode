/**
 * 用 map 记录每一个字母对应的下标，l 是左指针，r 是右指针。
 * 如果遍历到的字母 s[r] 在 map 中，并且位置是大于等于 l 的，那么就把 l 移动到这个字母的下一个位置。
 * 每次遍历完都计算一下当前字符串的长度，更新到 ans 中。
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0
  let ans = 0
  const map = new Map()
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1
    }
    map.set(s[r], r)
    ans = Math.max(r - l + 1, ans)
  }
  return ans
}
