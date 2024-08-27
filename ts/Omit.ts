/**
 * Omit 是 TypeScript 的一种类型操作符，用于从类型 T 中删去指定的属性 K。
 */
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type MyOmit2<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// 测试
interface Person {
  name: string
  age: number
  address: {
    city: string
    street: string
  }
}
/**
type PersonNameAndAge = {
  name: string;
  age: number;
}
 */
type PersonNameAndAge = MyOmit<Person, 'address'>
type PersonNameAndAge2 = MyOmit2<Person, 'address'>
