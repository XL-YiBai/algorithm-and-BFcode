// 使用used数组保证遍历时，每个元素都只使用了一次
var permuteUnique = function(nums) {
  let len = nums.length;
  nums.sort((a, b) => {
      return a - b;
  });
  const res = [];
  // numArr当前数组，，used记录nums中对应下标的元素是否已经使用过
  const rec = (numArr, used) => {
      if (numArr.length === len) {
          res.push(numArr);
          return;
      }

      // 遍历每个元素
      for (let j=0; j<nums.length; j++) {
          // 如果下标大于0，并且当前遍历的数和前一个数相等，且前一个数未使用，就continue剪枝，不使用当前数，保证同层相同的数都只取第一个
          if (j>0  && nums[j] === nums[j-1] && used[j-1] === false) continue;
          // 如果当前遍历的数未使用过，就放入数组中，改变对应used数组元素为已使用true，并传入参数继续递归
          if (!used[j]) {
              used[j] = true;
              rec([...numArr, nums[j]], used);
              used[j] = false;
          }
      }
  }
  rec([], []);
  return res;
};