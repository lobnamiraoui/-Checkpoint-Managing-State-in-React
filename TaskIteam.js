import React, { useState } from "react";

const TaskItem = ({
  task,
  deleteTask,
  updateTask,
  toggleTaskCompletion,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(task.name);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleEditSubmit = () => {
    updateTask({ ...task, name: updatedName, description: updatedDescription });
    setIsEditing(false);
  };

  return (
    <div>
      <div
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {!isEditing ? (
          <div>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
            <button onClick={handleEditSubmit}>Save</button>
          </div>
        )}
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? "Mark Incomplete" : "Mark Completed"}
        </button>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;