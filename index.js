class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertNodeAtStart(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertNodeAtEnd(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAtIndex(data, index) {
    if (index > 0 && index > this.size) {
      return;
    } else if (index === 0) {
      this.insertNodeAtStart(data);
      return;
    } else {
      let node = new Node(data);
      let current;
      let previous;
      current = this.head;

      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      node.next = current;
      previous.next = node;
    }
  }

  getAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      current = current.next;
      count++;
    }
  }

  deleteAtIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  deleteList() {
    this.head = null;
    this.size = 0;
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertNodeAtStart(100);
ll.insertNodeAtStart(200);
ll.insertNodeAtEnd(300);
ll.insertAtIndex(600, 1);
console.log(ll.printListData());
ll.deleteAtIndex(2);
ll.deleteList();
console.log(ll.printListData());
// ll.getAtIndex(3)
