/**
 * 手写浅拷贝
 */

const _shallowClone = (target) => {
  // 补全代码
  if (typeof target != "object" && typeof target != "function") {
    return target;
  }
  let ans;

  if (Array.isArray(target)) {
    ans = [];
  } else {
    ans = {};
  }
  for (let k in target) {
    ans[k] = target[k];
  }
  return ans;
};
