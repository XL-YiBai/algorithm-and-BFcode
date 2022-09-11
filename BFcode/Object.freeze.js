/**
 * 手写Object.freeze(obj)，
 * Object.freeze() 方法可以冻结一个对象。
 * 一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，
 * 不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。
 * 此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。
 */

const _objectFreeze = (object) => {
  // 补全代码
  if (typeof object == null) return;
  for (let k in object) {
    if (typeof object[k] == "object") {
      _objectFreeze(object[k]); //递归检查子属性
    } else {
      //设置属性不可修改，不可配置
      Object.defineProperty(object, k, {
        writable: false, // 设置不可写
        configurable: false, // 设置不可配置
      });
    }
  }
  // 封闭 object 对象，在对象外面不能增加，不可删除，可修改
  Object.seal(object);
};
