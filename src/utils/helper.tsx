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
      return <StatCard title="Total Users" value="1,245" growth="4.5%" />;
    case "active-users":
      return <StatCard title="Active Users" value="754" growth="-2.8%" />;
    case "new-users":
      return <StatCard title="New Signups" value="3000" growth="10%" />;
    case "total-revenue":
      return <StatCard title="Total Revenue" value="$12,000" growth="3.4%" />;
    case "recent-activities":
      return <RecentActivities />;
    case "users-overviews":
      return <UserOverviewCard />;
    case "monthly-revenue":
      return <LineChart />;
    case "monthly-user-activity":
      return <BarChart />;
    default:
      return <div>Unknown Widget</div>;
  }
};

export const defaultSetting = {
  preventCollision: false,
  allowOverlap: false,
};
