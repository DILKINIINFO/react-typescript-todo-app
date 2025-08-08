import type{ FilterType } from '../types/Todo';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterButtons = ({
  currentFilter,
  onFilterChange
}: FilterButtonsProps) => {
  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <div className="flex justify-center gap-2 mb-8">
      {filters.map((filterType) => (
        <button
          key={filterType}
          onClick={() => onFilterChange(filterType)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            currentFilter === filterType
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
              : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
          }`}
        >
          {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;