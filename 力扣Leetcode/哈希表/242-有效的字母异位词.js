/**
 * 思路：
 * 如果两个字符串长度不相等，那么对应字母更不可能全相等，直接return false
 * 字符串都只有小写字母，用长度26的数组做哈希表，存取a到z出现的个数
 * 先遍历s字符串，对应字母数量++
 * 之后遍历t字符串，对应字母数量--，最终应该数组中26个都变为零。
 * 如果遍历t字符串某个字母时，对应字母已经变为0，说明t中该字母数量更多，不符合异位词规定，return flase
 * 遍历完之后，都没有停止，说明对应字母数量都相同，最后return true
 */

var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const record = new Array(26).fill(0);
  const base = "a".charCodeAt();
  for (let v of s) {
    record[v.charCodeAt() - base]++;
  }
  for (let v of t) {
    if (record[v.charCodeAt() - base] === 0) return false;
    record[v.charCodeAt() - base]--;
  }
  return true;
};

/**
 * 二刷思路：
 * 如果两个字符串长度不相等，那么对应字母更不可能全相等，直接return false
 * 如果长度相当，遍历一遍，把两个数组各字母出现次数，分别存在map1和map2中，
 * 如果两个map的size不相等，说明对应字母个数都不同，返回false，
 * 否则遍历map1的key即字母，依次比较对应出现次数，如果不相等，返回false
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map1.has(s[i])) {
      map1.set(s[i], map1.get(s[i]) + 1);
    } else {
      map1.set(s[i], 1);
    }

    if (map2.has(t[i])) {
      map2.set(t[i], map2.get(t[i]) + 1);
    } else {
      map2.set(t[i], 1);
    }
  }

  if (map1.size !== map2.size) {
    return false;
  }

  for (let k of map1.keys()) {
    if (map1.get(k) !== map2.get(k)) {
      return false;
    }
  }
  return true;
};
