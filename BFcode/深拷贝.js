/**
 * 简易深拷贝：
 * 1. 参数对象和参数对象的每个数据项的数据类型范围仅在数组、普通对象（{}）、基本数据类型中]
 * 2. 无需考虑循环引用问题
 */

const _sampleDeepClone = (target) => {
  // 补全代码
  if (typeof target != 'object' || typeof target == null) {
    return target
  }

  let obj = Array.isArray(target) ? [] : {}
  for (let k in target) {
    // 排除原型上的属性，只拷贝对象自身的
    if (target.hasOwnProperty(k)) {
      obj[k] = _sampleDeepClone(target[k])
    }
  }
  return obj
}

/**
 * 复杂深拷贝：
 * 1. 需要考虑函数、正则、日期、ES6新对象
 * 2. 需要考虑循环引用问题
 */

const _completeDeepClone = (target, map = new WeakMap()) => {
  if (typeof target !== 'object' || target === null) return target

  if (map.has(target)) return map.get(target) // 如果已经拷贝过，返回已拷贝的引用，避免循环引用

  let obj

  if (target instanceof Date) {
    obj = new Date(target)
  } else if (target instanceof RegExp) {
    obj = new RegExp(target)
  } else if (target instanceof Set) {
    obj = new Set()
    map.set(target, obj) // 在递归之前存储
    target.forEach((v) => {
      obj.add(_completeDeepClone(v, map))
    })
  } else if (target instanceof Map) {
    obj = new Map()
    map.set(target, obj) // 在递归之前存储
    target.forEach((v, k) => {
      obj.set(_completeDeepClone(k, map), _completeDeepClone(v, map))
    })
  } else {
    obj = Array.isArray(target) ? [] : {}
    map.set(target, obj) // 在递归之前存储
    for (let k in target) {
      if (target.hasOwnProperty(k)) {
        obj[k] = _completeDeepClone(target[k], map)
      }
    }
  }

  map.set(target, obj) // 在所有处理完成后，更新 map 中的存储
  return obj
}
