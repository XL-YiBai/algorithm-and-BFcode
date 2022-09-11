/**
 * 简易深拷贝：
 * 1. 参数对象和参数对象的每个数据项的数据类型范围仅在数组、普通对象（{}）、基本数据类型中]
 * 2. 无需考虑循环引用问题
 */

const _sampleDeepClone = (target) => {
  // 补全代码
  if (typeof target != "object" || typeof target == null) {
    return target;
  }

  let obj = Array.isArray(target) ? [] : {};
  for (let k in target) {
    // 排除原型上的属性，只拷贝对象自身的
    if (target.hasOwnProperty(k)) {
      obj[k] = _sampleDeepClone(target[k]);
    }
  }
  return obj;
};

/**
 * 复杂深拷贝：
 * 1. 需要考虑函数、正则、日期、ES6新对象
 * 2. 需要考虑循环引用问题
 */

const _completeDeepClone = (target, map = new WeakMap()) => {
  // 补全代码
  if (typeof target != "object" || target == null) return target;
  if (map.has(target)) return; // 如果已经拷贝过，return，避免循环引用

  let obj = {};
  map.set(target, obj); // 添加target到map中

  if (target instanceof Date) {
    obj = new Date(target);
  } else if (target instanceof RegExp) {
    obj = new RegExp(target);
  } else if (target instanceof Set) {
    obj = new Set();
    target.forEach((v) => {
      obj.add(_completeDeepClone(v, map));
    });
  } else if (target instanceof Map) {
    obj = new Map();
    // map的key和value都可能是引用类型，都需要深拷贝
    target.forEach((v, k) => {
      obj.set(_completeDeepClone(k, map), _completeDeepClone(v, map));
    });
  } else {
    obj = Array.isArray(target) ? [] : {};
    for (let k in target) {
      // 只拷贝对象上的属性，不拷贝原型上的
      if (obj.hasOwnProperty(k)) {
        obj[k] = _completeDeepClone(target[k], map);
      }
    }
  }
  return obj;
};
