// TodoList.js
import React from 'react';

export default function TodoList(tasks, onDeleteTask) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
