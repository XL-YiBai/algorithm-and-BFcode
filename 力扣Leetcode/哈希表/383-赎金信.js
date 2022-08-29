/**
 * 思路1：用map1存第一个字符串各个字母出现次数，用map2存第二个字符串各字母出现次数
 * 然后遍历map1，如果对应字母第二个串出现次数比第一个串少，说明不能拼凑出第一个串，直接返回false
 * 如果遍历完都没返回false，说明每个字母第二个串都大于等于第一个串的，，能用串2组成出串1，满足题意返回true
 */

var canConstruct = function (ransomNote, magazine) {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < ransomNote.length; i++) {
    map1.set(ransomNote[i], (map1.get(ransomNote[i]) || 0) + 1);
  }
  for (let i = 0; i < magazine.length; i++) {
    map2.set(magazine[i], (map2.get(magazine[i]) || 0) + 1);
  }

  for (let [k, v] of map1) {
    if (!map2.get(k) || map2.get(k) < v) {
      return false;
    }
  }

  return true;
};

/**
 * 思路二：用数组26位保存各个字母出现次数，
 * 遍历第二个串，遍历一个字母，对应数组位置的值++
 * 再遍历第二个串，遍历一个字母对应数组位置的值--，
 * 如果第二个串遍历时，该对应位置的值已经为0，说明这个字母第二个串出现的次数少于第一个串，不能组成串1，不满足题意
 */
var canConstruct = function (ransomNote, magazine) {
  const strArr = new Array(26).fill(0), // 用数组26位保存各个字母出现次数
    base = "a".charCodeAt();
  // 先记录第二个串字母出现次数
  for (let s of magazine) {
    strArr[s.charCodeAt() - base]++;
  }
  // 再遍历第一个串，对应字母减少1次
  for (let s of ransomNote) {
    const index = s.charCodeAt() - base;
    if (!strArr[index]) {
      // 如果已经为0，说明串1这个字符已经大于串2了，不满足题意
      return false;
    }
    strArr[index]--;
  }
  return true;
};
