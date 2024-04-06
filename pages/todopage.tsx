import { useState } from 'react';

export default function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (!task) return;
    // setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}