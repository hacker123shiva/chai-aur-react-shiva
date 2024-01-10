// TodoListApp.js
import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoListApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList tasks={tasks} onDeleteTask={deleteTask} />
      <input
        type="text"
        placeholder="Enter a new task"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addTask(e.target.value.trim());
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default TodoListApp;
