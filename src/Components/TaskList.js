import React from 'react';

function TaskList({ tasks, onEdit, onDelete, onToggleComplete }) {
  if (!Array.isArray(tasks) || tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p className="due-date">{task.dueDate}</p>
          <div className="task-actions">
            <button onClick={() => onToggleComplete(index)}>
              {task.completed ? 'Mark as Active' : 'Mark as Completed'}
            </button>
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
