// src/App.js
import React, { useState, useEffect } from 'react';
import { TodoServiceClient } from './protoc/index_grpc_web_pb';
import { Todo, Empty, TodoId } from './protoc/index_pb';
import { FaCheckCircle, FaRegTrashAlt } from "react-icons/fa";


import './App.css';

const client = new TodoServiceClient('http://localhost:8080');

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    const request = new Empty();
    client.getTodos(request, {}, (err, response) => {
      if (!err) {
        setTodos(response.toObject().todosList);
      } else {
        console.error(err);
      }
    });
  };

  const addTodo = (strTodo) => {
    const newTodo = new Todo();
    newTodo.setTitle(strTodo);
    newTodo.setCompleted(false);
    client.addTodo(newTodo, {}, (err, response) => {
      if (!err) {
        getTodos();
      } else {
        console.error(err);
      }
    });
  };

  const updateTodo = (todo) => {
    const arrTodo = Object.values(todo);
    const objTodo = new Todo(arrTodo);
    client.updateTodo(objTodo, {}, (err, response) => {
      if (!err) {
        getTodos();
      } else {
        console.error(err);
      }
    });
  };

  const deleteTodo = (todoId) => {
    const objTodoId = new TodoId([todoId]);
    client.deleteTodo(objTodoId, {}, (err, response) => {
      if (!err) {
        getTodos();
      } else {
        console.error(err);
      }
    });
  };

  useEffect(() => {
    getTodos();
  }, []);


  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(e.target.inputTask.value);
    e.target.inputTask.value = ""; // Resetting input after add todo.
  };

  return (
    <div className='container'>
      <div id='newtask'>
        <form onSubmit={onSubmit}>
          <input name='inputTask' type='text' placeholder='Task to be done..' />
          <button type='submit'>Add</button>
        </form>
      </div>
      <div id='tasks'>
        {
          todos?.length > 0 && todos?.map(todo => (
            <div key={todo.id} className={`task ${todo.completed ? 'completed' : ''}`}>
              <span id='taskname'>
                {todo.title}
              </span>
              <div className='btn-group'>
                {
                  !todo.completed &&
                  <button onClick={() => updateTodo({ ...todo, completed: true })} className='completed'>
                    <FaCheckCircle />
                  </button>
                }
                <button onClick={() => deleteTodo(todo.id)} className='delete'>
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
