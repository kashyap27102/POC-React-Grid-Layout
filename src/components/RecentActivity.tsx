// Recent Activity Component
type RecentActivityProps = {
  activity: string;
  time: string;
};

export const RecentActivity: React.FC<RecentActivityProps> = ({
  activity,
  time,
}) => (
  <li className="flex justify-between items-center">
    <span className="text-gray-700">{activity}</span>
    <span className="text-gray-500 text-sm">{time}</span>
  </li>
);

{
  /* Recent Activity */
}

export const RecentActivities = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Recent Activities
      </h2>
      <ul className="space-y-4">
        <RecentActivity activity="User JohnDoe signed up" time="2 hours ago" />
        <RecentActivity
          activity="User Jane added a new post"
          time="4 hours ago"
        />
        <RecentActivity activity="System update completed" time="1 day ago" />
        <RecentActivity
          activity="User JohnDoe upgraded to Pro"
          time="2 days ago"
        />
      </ul>
    </div>
  );
};
