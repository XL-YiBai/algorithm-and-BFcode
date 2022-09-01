var removeElement = function (nums, val) {
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[cur] = nums[i];
      cur++;
    }
  }
  return cur;
};
