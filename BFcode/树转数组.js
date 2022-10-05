/**
 * 核心：使用一个map，保存子节点到父节点的映射。
 * 层序遍历，使用队列。
 */
// const tree = {
//   id: 1,
//   name: "部门A",
//   children: [
//     {
//       id: 2,
//       name: "部门B",
//       children: [
//         { id: 4, name: "部门D" },
//         { id: 5, name: "部门E" },
//       ],
//     },
//     {
//       id: 3,
//       name: "部门C",
//       children: [{ id: 6, name: "部门F" }],
//     },
//   ],
// };

const tree = {
  id: 2,
  name: "部门B",
  children: [
    {
      id: 1,
      name: "部门A",
      children: [
        {
          id: 3,
          name: "部门C",
          children: [
            {
              id: 6,
              name: "部门F",
            },
          ],
        },
        {
          id: 4,
          name: "部门D",
          children: [
            {
              id: 8,
              name: "部门H",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "部门E",
    },
    {
      id: 7,
      name: "部门G",
    },
  ],
};

const treeToArr = function (root) {
  const arr = [];
  const nodeToParent = new Map();

  const queue = [];
  queue.push(root); // 根节点入队

  // 广度优先遍历（层序遍历）
  while (queue.length > 0) {
    const curNode = queue.shift();
    if (curNode == null) break;

    // 解构id、name、children，没有children就默认赋空数组
    const { id, name, children = [] } = curNode;
    const parentNode = nodeToParent.get(curNode); // 通过map查找父节点
    const parentId = parentNode?.id || 0; // 如果有父节点就取父节点id，否则把parentid设为0，表示根节点
    const item = { id, name, parentId };
    arr.push(item); // 把节点转换的item推入arr保存
    // 遍历当前节点所有子节点
    children.forEach((child) => {
      queue.push(child); // 入队方便下一次遍历
      nodeToParent.set(child, curNode); // 保存父子节点的关系
    });
  }

  return arr;
};

console.log(treeToArr(tree));
