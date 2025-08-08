interface StatisticsProps {
  activeCount: number;
  completedCount: number;
  totalCount: number;
}

const Statistics = ({
  activeCount,
  completedCount,
  totalCount
}: StatisticsProps) => {
  return (
    <div className="flex justify-center gap-6 mb-8 text-slate-300">
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-400">{activeCount}</div>
        <div className="text-sm">Active</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-400">{completedCount}</div>
        <div className="text-sm">Completed</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-purple-400">{totalCount}</div>
        <div className="text-sm">Total</div>
      </div>
    </div>
  );
};

export default Statistics;
