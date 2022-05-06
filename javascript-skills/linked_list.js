/**
 * 연결 리스트(Linked List)
 * 연결 리스트는 각 요소를 포인터로 연결하여 관리하는 선영 자료구조이다.
 * 각 요소는 노드라고 부르며 데이터 영역과 포인터 영역으로 구성된다.
 *
 * 요소 찾기(O(n))
 * 요소 추가, 삭제(O(1))
 */

/**
 * Singly Linked List (단일 연결 리스트)
 * Head에서 Tail까지 단방향으로 이어지는 연결 리스트. 가장 단순한 형태.
 */

/**
 * Doubly Linked List (이중 연결 리스트)
 * 양방향으로 이어지는 연결 리스트.  Singly Linked List보다 자료구조의 크기가 조금 더 크다. 포인터 2개 존재.
 */

/**
 * Circular Linked List (선형 연결 리스트)
 * Singly Linked List 혹은 Doubly Linked List에서 Tail이 Head로 연결되는 연결 리스트.
 * 메모리를 아껴쓸 수 있다는 장점이 있고, 원형 큐 등을 만들 때도 사용함.
 */

// Singly Linked List (단일 연결 리스트) code
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// find
find = (value) => {
  let currNode = this.head;
  while (currNode.value !== value) currNode = currNode.next;
  return currNode;
};

// append (맨 뒤에 추가)
append = (newValue) => {
  const newNode = new Node(newValue);
  // 현재 node가 아무것도 없다면
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode; // 현재 tail의 next가 newNode를 가르키게 함
    this.tail = newNode; // 새로운 node가 추가되었으니 tail은 newNode
  }
};

// insert (중간에 추가)
insert = (node, newValue) => {
  const newNode = new Node(newValue);
  newNode.next = node.next; // 새로운 node의 next를 기존 node의 next로 변경
  node.next = newNode; // 기존 node는 새로운 node를 가르키게 함
};

// remove
remove = (value) => {
  let prevNode = this.head;
  while (prevNode.next.value !== value) prevNode = prevNode.next;

  if (prevNode.next !== null) prevNode.next = prevNode.next.next;
};
