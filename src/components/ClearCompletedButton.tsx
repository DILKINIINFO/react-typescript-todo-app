import React from 'react';

interface ClearCompletedButtonProps {
  completedCount: number;
  onClearCompleted: () => void;
}

export const ClearCompletedButton: React.FC<ClearCompletedButtonProps> = ({
  completedCount,
  onClearCompleted
}) => {
  if (completedCount === 0) {
    return null;
  }

  return (
    <div className="text-center">
      <button
        onClick={onClearCompleted}
        className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Clear {completedCount} Completed
      </button>
    </div>
  );
};