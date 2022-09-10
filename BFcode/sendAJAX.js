/**
 * 使用Promise封装一个函数，发送AJAX请求
 * 封装一个函数 sendAJAX 发送 GET AJAX 请求
 * 参数 URL
 * 返回结果 Promise 对象
 */

function sendAJAX(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", url);
    xhr.send();
    // 处理事件
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // 判断成功
        if (xhr.status >= 200 && xhr.status < 300) {
          // 成功的结果
          resolve(xhr.response);
        } else {
          reject(xhr.status);
        }
      }
    };
  });
}

// 功能测试
sendAJAX("https://api.apiopen.top/getJoke").then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.warn(reason);
  }
);
