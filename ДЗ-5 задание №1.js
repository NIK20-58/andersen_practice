class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

const isValidNum = (item) => {
    return typeof item === 'number' && !isNaN(item) && isFinite(item);
}
  
const throwError = () => {
    throw new Error("Ошибка!");
}

const isIterable = (item) => {
    return item && typeof item[Symbol.iterator] === 'function';
}

class Stack {
  constructor(maxSize = 10) {
      if (!isValidNum(maxSize)) {
          throwError();
      }

      this.head = null;
      this.size = 0;
      this.maxSize = maxSize;
  }

  isEmpty() {
      return this.size === 0;
  }

  push(value) {
      if (this.size >= this.maxSize) {
          throwError();
      }

      const node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.size++;
  }

  pop() {
      if (this.isEmpty()) {
          throwError();
      }

      let result = this.head.element;
      this.head = this.head.next;
      this.size--;

      return result;        
  }

  peek() {
      if (this.isEmpty()) {
          return null;
      }

      return this.head.element;
  }

  toArray() {
      let start = this.head;
      let result = [];

      for (let i = 0; i < this.size; i++) {
          result.push(start.element);

          start = start.next;
      }

      return result;
  }

  static fromIterable(iterable) {
      if (!isIterable(iterable)) {
          throwError();
      }

      const stack = new Stack(iterable.length);
      
      for (let element of iterable) {
          stack.push(element);
      }

      return stack;
  }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    append(elem) {
      if (this.size === 0) {
        this.head = new Node(elem);
      } else {
        let curEl = this.head;
  
        while (curEl.next) {
          curEl = curEl.next;
        }
  
        curEl.next = new Node(elem);
      }

      this.size++;
    }

    prepend(elem) {
        if (this.size === 0) {
            this.head = new Node(elem);
        } else {
            const node = new Node(elem);
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    find(elem) {
        let currentElement = this.head;

        for (let i = 0; i < this.size; i++) {
            if (currentElement.element === elem) {
                return currentElement.element;
            }

            currentElement = currentElement.next;
        }

        return null;
    }

    toArray() {
        const result = [];
        let currentElement = this.head;

        if (this.size === 0) {
            return [];
        }

        for (let i = 0; i < this.size; i++) {
            result.push(currentElement.element);

            currentElement = currentElement.next;
        }
        
        return result;
    }

    static fromIterable(iterable) {
        if (!isIterable(iterable)) {
          throwError();
        }

        const result = new LinkedList();

        for (let item of iterable) {
            result.append(item);
        }

        return result;
    }
}