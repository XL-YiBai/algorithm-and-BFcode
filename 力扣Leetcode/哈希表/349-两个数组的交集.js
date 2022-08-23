/**
 * 思路一：先把nums1出现过的数字存在一个set中，
 * 然后遍历nums2，把set中出现过的，推到ans数组，
 * 最后把ans数组去重即可
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  let ans = [];
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      ans.push(nums2[i]);
    }
  }

  ans = [...new Set(ans)];

  return ans;
};

/**
 * 思路二：用map，也是先把nums1出现过的存在map中，值为true
 * 然后遍历nums2，如果遍历的值，能在map中取到，就推入res数组，并且删掉map中这个值，保证下次不会再取到（去重）
 */
var intersection = function (nums1, nums2) {
  const map = new Map();
  nums1.forEach((n) => {
    map.set(n, true);
  });
  const res = [];
  nums2.forEach((n) => {
    if (map.get(n)) {
      res.push(n);
      map.delete(n);
    }
  });
  return res;
};
