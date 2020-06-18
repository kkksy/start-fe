import React, { useState } from 'react';
import Header from './Header';


function App() {
const [todo, setTodo] = useState('');
const [todos, setTodos] = useState([]);

function handleChange(event) {
  setTodo(e.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  const newTodos = [...todos];
  newTodos.push(todo);
  setTodos(newTodos);
  setTodo('')
}

console.log(todos);

  return (
  <div className="App">
    <div class="container">
      <header>
        <Headers/>
        <h1>Todo List</h1>
          <form class="new-task" onSubmint = {handleSubmit} >
      <input name="text" placeholder="할일을 입력하세요" id="input" onChange = {handleChange}/>
      </form>
  </header>
  <div id = "result">
    <ul>
    {
      todos.map(todo => {
      return(<li>{todo}</li>)
      })
    }
    </ul>
  </div>
</div>
</div>
  );
}

export default App;
