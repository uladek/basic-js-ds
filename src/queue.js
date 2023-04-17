const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    // this.list = new QueueList();
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  //те пока очередь пуста

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // return this.list;
    return this.head;
  }

  enqueue(value) {
    // this.list.append(value);
    //Метод append позволяет вставить в конец какого-либо элемента другой элемент.
    const node = new ListNode(value);
    if (this.head) {
       this.tail.next = node;
       this.tail = node;
       //указывает следующемкуэлементу, что он теперь полседний
    } else {
      this.head = node;
      this.tail = node;
      //в случае если не было или же т и первый и последний элемет
    }
    this.lenght++;
  }
  //добовляем элемент в коненц очереди

  dequeue() {
    
    const current = this.head;
    this.head = this.head.next;   
    this.length--;

    return current.value;
    //removeFromFron - 
    // const removedHead = this.linkedList.deleteHead();
    // return removedHead ? removedHead.value : null;
  }
  //dequeue -соответсвенно удаляем элемент из начла учереди
}

module.exports = {
  Queue
};
