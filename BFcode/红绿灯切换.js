/**
 * 红色 3s
 * 黄色 2s
 * 绿色 5s
 */
const stateList = [
  { name: "红", time: 3000 },
  { name: "黄", time: 2000 },
  { name: "绿", time: 5000 },
];

// color当前颜色，delay停留多少秒
function changeColor(color, delay) {
  return new Promise((resolve) => {
    console.log(color);
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

// 定义一个启动方法，
async function start() {
  for (let item of stateList) {
    await changeColor(item.name, item.time);
  }
  // 循环完递归启动
  start();
}

// 首次启动
start();
