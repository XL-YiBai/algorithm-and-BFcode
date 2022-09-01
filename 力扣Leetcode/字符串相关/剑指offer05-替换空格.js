/**
    思路1：遍历s，遇到空格就往ans添加%20，如果不是空格，就正常追加s[i]
 */
// var replaceSpace = function (s) {
//   let ans = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       ans += "%20";
//     } else {
//       ans += s[i];
//     }
//   }
//   return ans;
// };

/**
    思路2: 使用split根据空格分开成数组，然后使用 %20 连接
 */
var replaceSpace = function (s) {
  return s.split(" ").join("%20");
};
