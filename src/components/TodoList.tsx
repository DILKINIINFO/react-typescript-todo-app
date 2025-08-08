import type  { Todo, FilterType } from '../types/Todo';
import TodoItem from './TodoItem';
import EmptyState from './EmptyState';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({
  todos,
  filter,
  onToggleComplete,
  onDelete
}: TodoListProps) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.isCompleted;
    if (filter === 'completed') return todo.isCompleted;
    return true;
  });

  if (filteredTodos.length === 0) {
    return <EmptyState filter={filter} />;
  }

  return (
    <div className="space-y-3 mb-8">
      {filteredTodos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;