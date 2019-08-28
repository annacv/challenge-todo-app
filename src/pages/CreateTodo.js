import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import todoService from '../services/todo-service'

class CreateTodo extends Component {
  state = {
    title: '',
    body: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, body } = this.state;

    todoService.createTodo({
      title, body
    }).then(response => {
      this.setState({
        redirect: true
      })
    }).catch(error => console.log(error))
  }

  render() {
    const { title, body, redirect } = this.state;
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          className='create-todo__form'
        >
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              className='input-title'
              id='title'
              type='text'
              name='title'
              placeholder='todo title'
              value={title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='body'>Description</label>
            <input
              className='input-description'
              id='body'
              type='text'
              name='body'
              placeholder='todo description'
              value={body}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='btn btn__container'>
            <button className='btn__create-todo' type='submit'>Create todo</button>
          </div>
        </form>
        {redirect ? <Redirect to='/todos' /> : null}
      </>
    )
  }
}

export default CreateTodo
