/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todo = [];
  }

  add(task){
    this.todo.push(task);
  }

  remove(num){
    if(this.todo[num] == undefined){

    } 
    else {
    this.todo.splice(num,1);
    }
  }

  update(num, updatedTask){
    if(this.todo[num] == undefined){
    } 
    else {
      this.todo[num] = updatedTask;
    }
  }

  getAll(){
    return this.todo;
  }

  get(num){
    if(this.todo[num] == undefined){
      return null
    }
    return this.todo[num];
  }

  clear(){
    this.todo = []
  }
}

module.exports = Todo;
