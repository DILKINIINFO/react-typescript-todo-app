interface AddTaskFormProps {
  taskText: string;
  setTaskText: (text: string) => void;
  onAddTask: () => void;
}

const AddTaskForm = ({
  taskText,
  setTaskText,
  onAddTask
}: AddTaskFormProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAddTask();
    }
  };

  return (
    <div className="mb-8">
      <div className="flex gap-3 backdrop-blur-lg bg-white/10 p-4 rounded-2xl border border-white/20 shadow-2xl">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What magical task awaits? ✨"
          className="flex-grow p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-slate-300 text-lg backdrop-blur-sm transition-all duration-300"
        />
        <button
          onClick={onAddTask}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;
