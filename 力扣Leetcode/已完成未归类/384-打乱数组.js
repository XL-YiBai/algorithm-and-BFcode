/**
 * 在数组所有下标中，通过random随机取一个，然后插入到新数组中，反复，直到原数组为空。
 */

// 这里是打乱数组的函数
/**
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  let arr = [...this.oldArr];
  let newArr = [];
  while(arr.length > 0) {
      let k = Math.floor(Math.random() * arr.length);
      newArr.push(arr[k]);
      arr.splice(k, 1);
  }
  return newArr;
};
