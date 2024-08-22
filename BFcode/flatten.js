function flatten(arr) {
  const res = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((n) => res.push(n))
    } else {
      res.push(item)
    }
  })
  return res
}

// 使用 push
// function flattenDep(arr) {
//   const res = []
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       const flatItem = flattenDep(item)
//       flatItem.forEach((n) => res.push(n))
//     } else {
//       res.push(item)
//     }
//   })
//   return res
// }

// 使用 concat ([1].concat(2) -> [1, 2]、 [1].concat([2, [3]]) -> [1,2,[3]])
function flattenDep(arr) {
  let res = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      const flatItem = flattenDep(item)
      res = res.concat(flatItem)
    } else {
      res = res.concat(item)
    }
  })
  return res
}

const arr = [1, [2, [3, ['a', 'b'], 4], 5], 6]
console.log(flatten(arr))
console.log(flattenDep(arr))

// 指定拍平层级
function flat(arr, depth = 1) {
  const res = []
  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      res.push(...flat(item, depth - 1))
    } else {
      res.push(item)
    }
  })
  return res
}
const arr2 = [1, [2], [3, [4]]]
console.log(flat(arr2)) // [1,2,3,[4]]
console.log(flat(arr2, 1)) // [1,2,3,[4]]
console.log(flat(arr2, 2)) //[1,2,3,4]
