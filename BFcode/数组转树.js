/**
 * 数组转树的核心就是用一个map保存id到树节点的映射，
 * 方便遍历节点时，通过parentId找到其父节点，插入children数组中
 */
const arr = [
  {
    id: 2,
    name: "部门B",
    parentId: 0,
  },
  {
    id: 3,
    name: "部门C",
    parentId: 1,
  },
  {
    id: 1,
    name: "部门A",
    parentId: 2,
  },
  {
    id: 4,
    name: "部门D",
    parentId: 1,
  },
  {
    id: 5,
    name: "部门E",
    parentId: 2,
  },
  {
    id: 6,
    name: "部门F",
    parentId: 3,
  },
  {
    id: 7,
    name: "部门G",
    parentId: 2,
  },
  {
    id: 8,
    name: "部门H",
    parentId: 4,
  },
];

// 函数
const arrToTree = (arr) => {
  const idToTreeNode = new Map(); // 用一个map保存id到treeNode节点的映射
  let root; // 保存树的根节点
  // 遍历数组所有项
  arr.map((obj) => {
    // 生成一个树节点
    treeNode = {
      id: obj.id,
      name: obj.name,
      parentId: obj.parentId,
      children: [],
    };
    // 如果该节点parentId为0，说明没有父节点，那么就是顶部节点
    if (obj.parentId == 0) {
      root = treeNode;
    }
    // 保存该节点id到该节点的映射
    idToTreeNode.set(treeNode.id, treeNode);
  });

  // 遍历所有树节点
  idToTreeNode.forEach((treeNode) => {
    if (idToTreeNode.has(treeNode.parentId)) {
      // 拿到其父节点，插入到children数组中
      idToTreeNode.get(treeNode.parentId).children.push(treeNode);
    }
  });

  // 返回根节点，即返回该树
  return root;
};

console.log(arrToTree(arr));
