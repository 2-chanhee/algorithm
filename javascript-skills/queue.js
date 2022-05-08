// linear queue - array로 구현
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
}

enqueue = (value) => {
  this.queue[this.rear++] = value;
};

dequeue = () => {
  const value = this.queue[this.front];
  delete this.queue[this.front];
  this.front += 1;
  return value;
};

// 가장 앞의 값을 반환
peek = () => {
  return this.queue[this.front];
};

size = () => {
  return this.rear - this.front;
};

// shift()는 시간복잡도가 O(n) 이므로 queue에선 사용하지 말 것
