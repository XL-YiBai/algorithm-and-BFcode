/**
 * B站二面手写题：
 * // 遍历所有网站，抓取每个页面的标题
 */

// 各个网站的数组
const crawJobs = [
  "http://xxx.com/a/b.html",
  "http://xxx.com/a/b.html",
  "http://xxx.com/a/b.html",
  // ...
];

// 该函数用于接收url，发起网络请求获取该网页标题，返回Promise
const crawForTitle = (url) => {
  return Promise.resolve("...");
};

// 调用mapLimit实现最大并发3个Promise
const result = await mapLimit(crawJobs, 3, crawForTitle);

// 题目要求实现的mapLimit函数，实现Promise最大并发实现
function mapLimit(crawJobs, k, crawForTitle) {
  const res = [];
  let count = 0; // 当前已经完成 或 已经开始的任务数量

  for (let i = 0; i < k; i++) {
    doNext();
  }

  function doNext() {
    if (count < crawJobs.length) {
      const cur = crawJobs[count];
      count++;
      crawForTitle(cur).then((v) => {
        res.push(v);
        if (count < crawJobs.length) {
          doNext();
        }
      });
    }
  }
}
