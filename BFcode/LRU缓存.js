/**
 * 使用map，放进去的顺序，就是最新使用的顺序。
 * 通过map.keys().next().value，拿到最久未使用的key。
 * 取一个数时，需要更新该数最久使用过，就先删掉，再重新set加入即可。
 */

class LRUCache {
  constructor(length) {
    if (length < 1) {
      throw new Error("invalid length");
    }
    this.length = length;
    this.data = new Map();
  }

  set(key, value) {
    if (this.data.has(key)) {
      this.data.delete(key);
    }
    this.data.set(key, value);
    // 如果已经超出length
    if (this.data.size > this.length) {
      const delKey = this.data.keys().next().value; // 拿到第一个key，就是最久未使用的
      this.data.delete(delKey); // 删除
    }
  }

  get(key) {
    if (!this.data.has(key)) return null;

    const value = this.data.get(key);
    // 删除再加入，就模拟了最新使用的
    this.data.delete(key);
    this.data.set(key, value);
    return value;
  }
}

// 功能测试
// 假设越往右是最近使用过的，长度为2
const lruCache = new LRUCache(2);
lruCache.set(1, 1); // {1=1}
lruCache.set(2, 2); // {1=1, 2=2}
console.log(lruCache.get(1)); // 输出1    相当于复习了，所以1=1提前 {2=2, 1=1}
lruCache.set(3, 3); // {1=1, 3=3}
console.log(lruCache.get(2)); // 输出null
lruCache.set(4, 4); // {3=3, 4=4}
console.info(lruCache.get(1)); // 输出null
console.info(lruCache.get(3)); // 输出3 {4=4, 3=3}
console.info(lruCache.get(4)); // 输出4 {3=3, 4=4}
