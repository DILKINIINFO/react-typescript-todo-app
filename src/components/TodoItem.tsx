import type { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  index: number;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({
  todo,
  index,
  onToggleComplete,
  onDelete
}: TodoItemProps) => {
  return (
    <div
      className={`group backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/10 hover:border-white/20 shadow-lg hover:shadow-xl animate-fade-in ${
        todo.isCompleted ? 'opacity-75' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-grow">
          <button
            onClick={() => onToggleComplete(todo.id)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
              todo.isCompleted
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 text-white'
                : 'border-slate-400 hover:border-purple-400 hover:bg-purple-400/20'
            }`}
          >
            {todo.isCompleted ? (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
              </svg>
            )}
          </button>
          <span
            onClick={() => onToggleComplete(todo.id)}
            className={`flex-grow cursor-pointer text-lg transition-all duration-300 ${
              todo.isCompleted 
                ? 'line-through text-slate-400' 
                : 'text-white group-hover:text-purple-200'
            }`}
          >
            {todo.text}
          </span>
        </div>
        <button
          onClick={() => onDelete(todo.id)}
          className="ml-4 p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;