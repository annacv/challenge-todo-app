import axios from 'axios';

class TodoService {
  constructor() {
    this.todo = axios.create({
      baseURL: 'http://localhost:4000/api/v1'
    })
  }

  getAllTodos() {
    return this.todo.get('/todos')
      .then(response => response)
  };

  getTodo(id) {
    return this.todo.get(`/todos/${id}`)
      .then(response => response)
  }

  createTodo(newtodo) {
    return this.todo.post('/todos/create', newtodo)
      .then(response => { console.log(response); return response })
  };

  updateTodo(id, updatetodo) {
    return this.todo.put(`/todos/${id}`, updatetodo)
      .then(response => response)
  };

  deleteTodo(id) {
    return this.todo.delete(`/todos/${id}`)
      .then(response => response)
  };
}

const todoService = new TodoService();

export default todoService