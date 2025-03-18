import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, updateTask, toggleTaskCompletion }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;