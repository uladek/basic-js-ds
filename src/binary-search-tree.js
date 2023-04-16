const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node  {

  constructor(date) {
    this.data = date;
    this.left = null;
    this.right = null;
  }

}
class BinarySearchTree {

  constructor () {
    this.mainRoot = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
      if (this.mainRoot === null) {
        return null;
      } else {
      return this.mainRoot;
      }
      // return this.mainRoot

  }

  
  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let newNode  = new Node(data)
    //  if(!this.mainRoot) 
     if(this.mainRoot === null) {
      //имя не должно совпадать и именем функцмм root
      this.mainRoot = new Node(data);  
      return;
    } 

   
    let curNode =  this.mainRoot;
    //curNode нода с которой работаем в данный момент
      
   while(this.mainRoot)

    if(newNode.data < curNode.data ) {
      if(curNode.left===null){ 
        //если ноды слево нет то присвиваем
         curNode.left = newNode ;
         return curNode.left;
         //если curNode.left не существует то присваиваем
      }
      curNode = curNode.left ;
    
        } else  {
        if (curNode.right===null) { 
          curNode.right = newNode ;
          return curNode.right ;
          //анологично
      }
        curNode = curNode.right ;
  }
}



  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};