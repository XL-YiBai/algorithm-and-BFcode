

var combinationSum2 = function(candidates, target) {
  let ans = [];
  candidates.sort((a, b) => {
      return a-b;
  })
  const dfs = (tag, arr, i) => {
      if(tag === 0) {
          ans.push(arr);
          return;
      }
      if (tag-candidates[i] < 0) {
          return;
      }
      // 每一层递归里面都会有一个独立的used，如果当前遍历的数使用了，就把f赋值为当前数，
      // 那么下一个for循环的值等于used的话，说明这个值已经使用过，就continue掉
      // 也就是递归树的同一层级都使用不同的值，而不同层级可以使用相同的值。
      let used = -1;
      for (let j=i; j<candidates.length; j++) {
          const n = candidates[j];
          if (n === used) continue; // 如果上一层循环使用过相同的数，continue掉
          used = n; // 否则，使用当前数值，并把当前数值赋值给used，避免下一次循环使用相同数值
          dfs(tag-n, [...arr, n], j+1);
      }
  }
  dfs(target, [], 0);

  return ans;
};