// Pick<User, 'stature' | 'name'>，从 User 中筛选出 stature 和 name 属性

type MyPick<T, K extends keyof T> = { [Key in K]: T[Key] }

// 测试
interface User {
  stature: number
  age: number
  name: string
}

const people: Pick<User, 'stature' | 'name'> = {
  name: '张三',
  stature: 185,
}
