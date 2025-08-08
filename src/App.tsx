
import { useState, useEffect } from 'react';
import type { Todo, FilterType } from './types/Todo';
import BackgroundAnimations from './components/VantaBackground';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import FilterButtons from './components/FilterButtons';
import Statistics from './components/Statistics';
import TodoList from './components/TodoList';
import ClearCompletedButton from './components/ClearCompletedButton';


const STORAGE_KEY = 'todos-vanta-app';

function App() {
  // 2. FROM LOCALSTORAGE ON STARTUP
 
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos) as (Omit<Todo, 'createdAt'> & { createdAt: string })[];
    
      return parsedTodos.map((todo): Todo => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }));
    }
    
    return [
      { id: '1', text: 'Welcome to your enhanced todo app!', isCompleted: false, createdAt: new Date() },
      { id: '2', text: 'Try adding a new task', isCompleted: false, createdAt: new Date() }
    ];
  });

  const [taskText, setTaskText] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  
  //  SAVE TO LOCALSTORAGE ON EVERY CHANGE

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTask = () => {
    if (taskText.trim() === '') return;
    
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: taskText.trim(),
      isCompleted: false,
      createdAt: new Date(),
    };
    
    setTodos(prevTodos => [newTodo, ...prevTodos]);
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

  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.isCompleted));
  };

  const completedCount = todos.filter(todo => todo.isCompleted).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <BackgroundAnimations />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center pt-8 px-4 ">
        <div className="w-full max-w-2xl">
          <Header />
          
          <AddTaskForm
            taskText={taskText}
            setTaskText={setTaskText}
            onAddTask={handleAddTask}
          />

          <FilterButtons
            currentFilter={filter}
            onFilterChange={setFilter}
          />

          <Statistics
            activeCount={activeCount}
            completedCount={completedCount}
            totalCount={todos.length}
          />

          <TodoList
            todos={todos}
            filter={filter}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTask}
          />

          <ClearCompletedButton
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;