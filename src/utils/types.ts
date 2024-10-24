import { Layout } from "react-grid-layout";

export interface Widget {
  id: string;
  type: string;
  icon: React.ReactNode;
}
export interface LayoutItem extends Layout {
  widgetType: string;
}
