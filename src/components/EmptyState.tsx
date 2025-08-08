import React from 'react';
import { FilterType } from '../types/Todo';

interface EmptyStateProps {
  filter: FilterType;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ filter }) => {
  const getEmptyStateMessage = () => {
    switch (filter) {
      case 'active':
        return {
          icon: '🎉',
          title: 'All tasks completed!',
          subtitle: 'Great job! You\'ve finished everything!'
        };
      case 'completed':
        return {
          icon: '📋',
          title: 'No completed tasks yet',
          subtitle: 'Complete some tasks to see them here.'
        };
      default:
        return {
          icon: '🎯',
          title: 'No tasks found!',
          subtitle: 'Add your first task to get started.'
        };
    }
  };

  const { icon, title, subtitle } = getEmptyStateMessage();

  return (
    <div className="text-center py-12 text-slate-400 mb-8">
      <div className="text-6xl mb-4">{icon}</div>
      <p className="text-xl">{title}</p>
      <p className="text-sm mt-2">{subtitle}</p>
    </div>
  );
};