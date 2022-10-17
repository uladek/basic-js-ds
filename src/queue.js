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
      this.size = 0;
  }
  //выpываем конструктор, где создаем новый экземляр linked list

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    return this.list;
  }

  enqueue(value) {
    this.list.append(value);
    //Метод append позволяет вставить в конец какого-либо элемента другой элемент.
  }
  //добовляем элемент в коненц очереди

  dequeue() {
    return this.list.removeFromFront();
    //removeFromFron - 

    // const removedHead = this.linkedList.deleteHead();
    // return removedHead ? removedHead.value : null;
  }
  //dequeue -соответсвенно удаляем элемент из начла учереди
}

module.exports = {
  Queue
};
