const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node  {

  constructor(data) {
    this.data = data;
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
      //или  return this.mainRoot
  }

  
  add(data) {
    // или  if(!this.mainRoot) 
     if(this.mainRoot === null) {
      //имя не должно совпадать и именем функцмм root
      this.mainRoot = new Node(data);  
      return this.mainRoot;
    } 
    let newNode  = new Node(data)
    let curNode =  this.mainRoot;
    //теперь верхука карэнтнод
    //curNode нода с которой работаем в данный момент
   while(this.mainRoot)
   //или curNode  
    if(newNode.data < curNode.data ) {
        if (curNode.left===null) { 
          //если ноды слево нет то присвиваем
           curNode.left = newNode ;
          return curNode.left;
          //если curNode.left не существует то присваиваем
            } else {
              curNode = curNode.left ;
              }
        } else  {
            if (curNode.right===null) { 
              curNode.right = newNode ;
              return curNode.right ;
              //анологично
                } else {
                  curNode = curNode.right ;
              }
     }
}


  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    return hasNode(this.mainRoot, data);

      function hasNode(node, data) {
        if(!node) {
          //если не нод
          return false;
        }
      
      if (node.data === data) {
        return true;
      }
   // или же
          if (data < node.data ) {
            return  hasNode(node.left, data)
          } else {
            return  hasNode(node.right, data)
          }
  }
 

}

  find(data) {
 
  return findNode(this.mainRoot, data);

  function findNode(node, data) {
    if(!node) {
      //если не нод
      return null;
    }
  
  if (node.data === data) {
    return node;
  }
// или же
      if (data < node.data ) {
        return  findNode(node.left, data)
      } else {
        return  findNode(node.right, data)
      }
}

  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here 
    this.mainRoot = removeNode(this.mainRoot, data)

    function removeNode(node, data) {
      if(node===null){
      //если нет узла то ретерн пустого значения
        return null; 
      }  

      // if (node.data === data) {
      //   return node;
      // }    

      if(data < node.data) { 
        node.left = removeNode(node.left, data)
        return node;
      // на место удаленного элемента ста вим новый узел без него  
      } else if (data > node.data){
        node.right = removeNode(node.right, data)
        return node;  
      } else if (data === node.data){  

        if(node.left===null && node.right===null) {
          //если лист (элемент не имеет потомков)
          return null ; 
        }

        //и если нет какого одного потлмка
        if(node.left===null){
          node = node.right;
          //заменяем на единственного потомка 
          return node;
        }
        if (node.right===null){
          node = node.left;  
          //тоже самое
          return node; 
      }
 
      //если есть оба потомка и слева и справа
      //нужно найти минимум из тех что больше(справого поддерева)
      //или максимум из тех что меньше(левого поддерева)
      //те поставить на место удаляемого узла
    
        let maxLeft = node.left;
        while (maxLeft.right) {
          //поак есть элемет справа
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data
        node.left =  removeNode(node.left, maxLeft.data);
        return node;
        // или наоборот 
        // let minRight = node.right; 
      // while (minRight.left) { 
      //   //пока элемент слева есть
      //   minRight = minRight.left
      // }
      // node.data = minRight.data;
      // node.right = removeNode(node.right, minRight.data);
      //   return node;

    } 
  }
}

  min() {
    if(!this.mainRoot){
      //если нет элемента
      return null;
    }
    let minNode  = this.mainRoot;
    while(minNode <= minNode.left) {
      //если какокй элемент меньше left, то 
      //тдоходим до самого левего элемента
      //можно просто while(minNode.left)
      minNode = minNode.left ;
    }
    return minNode.data
  }

  max() {
    if(!this.mainRoot){
      //если нет элемента
      return null;
    }
    let maxNode  = this.mainRoot;
    while(maxNode >= maxNode.right) {
      
      maxNode = maxNode.right; 
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
