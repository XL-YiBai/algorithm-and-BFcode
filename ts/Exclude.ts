/**
 * 前置知识：
 * 当类型参数为联合类型，并且在条件类型左边直接引用该类型参数的时候，
 * TypeScript 会把每一个元素单独传入来做类型运算，最后再合并成联合类型，这种语法叫做分布式条件类型。
 */

// 例如：UppercaseAB 把 a 和 b 大写
type Union = 'a' | 'b' | 'c'
type UppercaseAB<Item extends string> = Item extends 'a' | 'b'
  ? Uppercase<Item>
  : Item
type Res = UppercaseAB<Union> // type Res = "c" | "A" | "B"

/**
 * Exclude 用于从类型 T 中排除掉指定的类型 K。
 */

type MyExclude<T, K> = T extends K ? never : T

// 测试
type A = 'a' | 'b' | 'c' | 'd'
type B = 'b' | 'd' | 'e' | 'f'
type C = MyExclude<A, B> // "a" | "c"
