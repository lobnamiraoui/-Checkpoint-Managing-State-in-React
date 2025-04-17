import React from 'react';

function TaskForm({ onSubmit, taskName, setTaskName, taskDesc, setTaskDesc, taskDueDate, setTaskDueDate, isEditing }) {
  return (
    <form onSubmit={onSubmit} className="task-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        value={taskDesc}
        onChange={(e) => setTaskDesc(e.target.value)}
        placeholder="Task Description"
      />
      <input
        type="date"
        value={taskDueDate}
        onChange={(e) => setTaskDueDate(e.target.value)}
      />
      <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;