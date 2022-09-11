/**
 * 手写Object.create
 */

const _objectCreate = (proto) => {
  // 补全代码
  const obj = new Object();
  obj.__proto__ = proto;
  return obj;
};
