import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>WhatTodoApp</h2>
      <ul>
        <li><Link to='/todos'>See the tasks</Link></li>
        <li><Link to='/todos/create'>Create a task</Link></li>
      </ul>
    </div>
  )
}

export default Home
