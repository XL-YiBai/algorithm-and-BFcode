function myNew(constructor, ...args) {
  const obj = Object.create(constructor.prototype)
  const result = constructor.apply(obj, args)
  return typeof result === 'object' ? result : obj
}

// 测试
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.say = function () {
  console.log(this.name)
}

let p = myNew(Person, '张三', 21)
console.log(p) // Person { name: '张三', age: 21 }
p.say() // 张三
