/**
 * Partial 是 TypeScript 内置的一个类型操作符，它用于将某个类型中每个属性设置为可选属性，
 * 这表示这些属性的值可以是 undefined 或者省略。
 */

type MyPartial<T> = {
  [Key in keyof T]?: T[Key]
}

// 测试
interface Person {
  name: string
  age: number
}
/**
 * 效果如下：
 * type PartialPerson = {
 *    name?: string | undefined;
 *    age?: number | undefined;
 * }
 */
type PartialPerson = MyPartial<Person>
let person1: PartialPerson = { name: 'Alice' } // age 是可选属性，值默认为 undefined
let person2: PartialPerson = {} // name 和 age 都是可选属性，值默认为 undefined
let person3: Partial<Person> = { name: 'Bob', age: 20 } // 和 Person 一样，都是必选属性
