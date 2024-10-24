// import { MyAreaChart } from "./MyAreaChart";
// import { MyBarChart } from "./MyBarChart";
// import { MyRadarChart } from "./MyRadarChart";

import { StatCard } from "./StateCard";

const Sidebar = () => {
  return (
    <div className="rounded-lg bg-white p-4 h-full overflow-auto">
      <div className="flex flex-col gap-4">
        <StatCard title="Total Users" value="1,245" growth="4.5%" />
        <StatCard title="Active Users" value="754" growth="2.8%" />
        <StatCard title="New Signups" value="120" growth="1.9%" />
        <StatCard title="Total Revenue" value="$12,000" growth="3.4%" />
        <StatCard title="Total Revenue" value="$12,000" growth="3.4%" />
        <StatCard title="Total Revenue" value="$12,000" growth="3.4%" />
        <StatCard title="Total Revenue" value="$12,000" growth="3.4%" />
      </div>
    </div>
  );
};

export default Sidebar;
