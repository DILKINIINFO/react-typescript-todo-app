// src/App.tsx
// Add 'useEffect' to the import from react
import { useState, useEffect } from 'react'; 
import type { Todo } from './types';

// The key we'll use to store our todos in LocalStorage
const LOCAL_STORAGE_KEY = 'react-todo-app-tasks';

function App() {
  // NEW: Modify the initial state to load from LocalStorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (error) {
        console.error("Failed to parse todos from localStorage", error);
        return []; // Return empty array if parsing fails
      }
    }
    return [];
  });
  
  const [taskText, setTaskText] = useState('');

  // NEW: This useEffect will run whenever the 'todos' state changes
  // It saves the current list of todos to LocalStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]); // The effect depends on the 'todos' array, so it runs when todos change

  // ... (all the handler functions: handleAddTask, handleToggleComplete, handleDeleteTask are IDENTICAL to before)
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: taskText,
      isCompleted: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setTaskText('');
  };

  const handleToggleComplete = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  
  // ... (the entire JSX return statement is IDENTICAL to before)
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center pt-10 text-white font-sans">
      <div className="w-full max-w-xl p-4">
        <h1 className="text-5xl font-bold text-center mb-8">My To-Do List</h1>
        <form onSubmit={handleAddTask} className="flex gap-2 mb-8">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-grow p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-lg"
          />
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 p-3 px-6 rounded font-semibold text-lg transition-colors"
          >
            Add
          </button>
        </form>
        <ul className="space-y-3">
          {todos.map(todo => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-4 rounded-lg transition-colors duration-300 ${
                todo.isCompleted ? 'bg-green-900/50' : 'bg-slate-800'
              }`}
            >
              <span
                onClick={() => handleToggleComplete(todo.id)}
                className={`flex-grow cursor-pointer text-lg ${
                  todo.isCompleted ? 'line-through text-slate-500' : ''
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDeleteTask(todo.id)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm transition-colors"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;