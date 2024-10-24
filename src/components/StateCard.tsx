// Stat Card Component
type StatCardProps = {
  title: string;
  value: string;
  growth: string;
};

export const StatCard: React.FC<StatCardProps> = ({ title, value, growth }) => (
  <div className="bg-slate-100 p-4 rounded-lg shadow-md h-full">
    <h3 className="text-gray-600 text-lg font-medium">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
    <p
      className={`mt-1 text-sm ${
        parseFloat(growth) > 0 ? "text-green-600" : "text-red-600"
      }`}
    >
      {growth} {parseFloat(growth) > 0 ? "↑" : "↓"}
    </p>
  </div>
);
