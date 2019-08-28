import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import todoService from '../services/todo-service'

class Todos extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    todoService.getAllTodos()
      .then(response => {
        this.setState({
          todos: response.data
        })
      })
  }

  handleDeleteClick = (id) => {
    todoService.deleteTodo(id)
      .then(() => {
        const filteredTodos = this.state.todos.filter((singleTodo) => {
          return singleTodo._id !== id
        })
        this.setState({
          todos: filteredTodos,
          redirect: true
        })
        console.log(this.todos)
      }).catch(error => console.log(error))
  }

  render() {
    const { todos, redirect } = this.state
    return (
      <div>
        <h2>Aloha list!</h2>
        <section className='container'>
          <Link to='/todos/create'><button>Create a new task</button></Link>
          {todos.length > 0 ? todos.map((todo) => {
            return (
              <article key={todo._id} className='todo-container'>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <button className='button' onClick={() => { this.handleDeleteClick(todo._id) }}>- Delete task -</button>
                {redirect ? <Redirect to='/todos' /> : null}
              </article>
            )
          }) : <p>Loading list</p>}
        </section>
      </div >
    )
  }
}

export default Todos 