import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import Filter from './Components/Filter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState('all');

  // Récupérer les tâches depuis le localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Sauvegarder dans le localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDesc) return alert('Both fields are required.');

    const newTask = {
      name: taskName,
      description: taskDesc,
      dueDate: taskDueDate,
      completed: false,
    };

    if (isEditing) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    setTaskName('');
    setTaskDesc('');
    setTaskDueDate('');
  };

  const handleEdit = (index) => {
    const task = tasks[index];
    setTaskName(task.name);
    setTaskDesc(task.description);
    setTaskDueDate(task.dueDate || '');
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <div className="task-form">
        <TaskForm
          onSubmit={handleSubmit}
          taskName={taskName}
          setTaskName={setTaskName}
          taskDesc={taskDesc}
          setTaskDesc={setTaskDesc}
          taskDueDate={taskDueDate}
          setTaskDueDate={setTaskDueDate}
          isEditing={isEditing}
        />
      </div>

      <div className="filters">
        <Filter setFilter={setFilter} currentFilter={filter} />
      </div>

      <TaskList
        tasks={filteredTasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;