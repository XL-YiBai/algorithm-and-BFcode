/**
 * 手写instanceof
 */

// instance 实例，origin 构造函数
function myInstanceof(instance, origin) {
  if (instance == null) return false;

  const type = typeof instance;
  // 排除值类型，值类型 instanceof 都返回false
  if (type !== "object" && type !== "function") {
    return false;
  }

  let tempInstance = instance; // 防止修改 instance
  while (tempInstance) {
    if (tempInstance.__proto__ === origin.prototype) {
      return true;
    }
    // 未匹配到，就顺着原型链继续往上找
    tempInstance = tempInstance.__proto__;
  }

  return false;
}

// 功能测试
console.log(myInstanceof({}, Object)); // true
console.log(myInstanceof([], Object)); // true
console.log(myInstanceof([], Array)); // true
console.log(myInstanceof({}, Array)); // false
console.log(myInstanceof("ab", String)); // flase
