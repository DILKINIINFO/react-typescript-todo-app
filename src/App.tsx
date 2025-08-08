import React, { useState } from 'react';
import { Todo, FilterType } from './types/Todo';
import { BackgroundAnimations } from './components/BackgroundAnimations';
import { Header } from './components/Header';
import { AddTaskForm } from './components/AddTaskForm';
import { FilterButtons } from './components/FilterButtons';
import { Statistics } from './components/Statistics';
import { TodoList } from './components/TodoList';
import { ClearCompletedButton } from './components/ClearCompletedButton';
import { GlobalStyles } from './components/GlobalStyles';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Welcome to your enhanced todo app!', isCompleted: false, createdAt: new Date() },
    { id: '2', text: 'Try adding a new task', isCompleted: false, createdAt: new Date() }
  ]);
  const [taskText, setTaskText] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

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
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <GlobalStyles />
      <BackgroundAnimations />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center pt-8 px-4 min-h-screen">
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