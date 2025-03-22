class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.map = new Map();
    this.head = null;
    this.tail = null;
  }

  #removeNode(node) {
    if (!node) return;

    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }

  get(key) {
    if (!this.map.has(key)) return null;

    const node = this.map.get(key);
    this.#removeNode(node);

    // Move node to the front
    node.prev = null;
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }

    this.map.set(key, node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.#removeNode(this.map.get(key));
      this.length--;
    }

    if (this.length === this.capacity) {
      this.map.delete(this.tail.key);
      this.#removeNode(this.tail);
      this.length--;
    }

    const node = { key, value, next: this.head, prev: null };
    this.map.set(key, node);

    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    this.length++;
  }

  debug() {
    let cur = this.head;
    const arr = [];
    while (cur != null) {
      arr.push(`[[${cur.key}]:[${cur.value}]]`);
      cur = cur.next;
    }
    return arr.join(" ---> ");
  }
}

const cache = new LRUCache(3);
cache.put(1, 10);
console.log(cache.debug());
cache.put(2, 20);
console.log(cache.debug());
cache.put(3, 30);
console.log(cache.debug());
cache.get(2);
console.log(cache.debug());
cache.put(4, 40);
console.log(cache.debug());
cache.get(2);
console.log(cache.debug());
cache.put(5, 50);
console.log(cache.debug());
