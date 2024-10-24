import { StatCard } from "@/components/StateCard";
import { LayoutItem, Widget } from "./types";
import { RecentActivities } from "@/components/RecentActivity";
import {
  Activity,
  ChartColumn,
  DollarSign,
  User,
  User2Icon,
  UserCheck2Icon,
  UsersRound,
} from "lucide-react";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import { UserOverviewCard } from "@/components/UserOverview";

export const availableWidgets: Widget[] = [
  {
    id: "user-count",
    type: "Total Users Count",
    icon: <User />,
  },
  {
    id: "active-users",
    type: "Active Users Count",
    icon: <UserCheck2Icon />,
  },
  {
    id: "new-users",
    type: "New Signups Count",
    icon: <User2Icon />,
  },
  {
    id: "total-revenue",
    type: "Total Revenue Count",
    icon: <DollarSign />,
  },
  {
    id: "recent-activities",
    type: "Recent Activity Logs",
    icon: <Activity />,
  },
  {
    id: "users-overviews",
    type: "Users Overview",
    icon: <UsersRound />,
  },
  {
    id: "monthly-revenue",
    type: "Monthly Revenue Chart",
    icon: <ChartColumn />,
  },
  {
    id: "monthly-user-activity",
    type: "Monthly User Activity Chart",
    icon: <ChartColumn />,
  },
];

export const renderWidget = (widget: LayoutItem) => {
  switch (widget.widgetType) {
    case "user-count":
      return (
        <div className="h-full">
          <StatCard title="Total Users" value="1,245" growth="4.5%" />
        </div>
      );
    case "active-users":
      return (
        <div className="h-full">
          <StatCard title="Active Users" value="754" growth="-2.8%" />
        </div>
      );
    case "new-users":
      return (
        <div className="h-full">
          <StatCard title="New Signups" value="3000" growth="10%" />
        </div>
      );
    case "total-revenue":
      return (
        <div className="h-full">
          <StatCard title="Total Revenue" value="$12,000" growth="3.4%" />
        </div>
      );
    case "recent-activities":
      return (
        <div className="h-full">
          <RecentActivities />
        </div>
      );
    case "users-overviews":
      return (
        <div className="h-full">
          <UserOverviewCard />
        </div>
      );
    case "monthly-revenue":
      return (
        <div className="h-full">
          <LineChart />
        </div>
      );
    case "monthly-user-activity":
      return (
        <div className="h-full">
          <BarChart />
        </div>
      );
    default:
      return <div>Unknown Widget</div>;
  }
};

export const defaultSetting = {
  preventCollision: false,
  allowOverlap: false,
};
