import React, { useState, useEffect } from "react";
import ResponsiveGridLayout, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css"; // Optional: include CSS for layout
import "react-resizable/css/styles.css"; // Optional: include CSS for resizing

import { StatCard } from "./StateCard";
import { RecentActivities } from "./RecentActivity";
import { UserOverviewCard } from "./UserOverview";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import GridItem from "./GridItems";

const MyFirstGrid = () => {
  // Use useState instead of useRef to trigger re-renders
  const [layout, setLayout] = useState<Layout[]>(
    () =>
      JSON.parse(localStorage.getItem("layout")!) || [
        { i: "a", x: 0, y: 0, w: 2, h: 8, minH: 8, minW: 2, static: false },
        { i: "b", x: 2, y: 0, w: 2, h: 8, minH: 8, minW: 2, static: false },
        { i: "c", x: 4, y: 0, w: 2, h: 8, minH: 8, minW: 2, static: false },
        { i: "d", x: 6, y: 0, w: 2, h: 8, minH: 8, minW: 2, static: false },
        { i: "e", x: 0, y: 1, w: 4, h: 13, minH: 8, minW: 2, static: false },
        { i: "f", x: 8, y: 1, w: 4, h: 28, minH: 8, minW: 2, static: false },
        { i: "g", x: 0, y: 2, w: 4, h: 16, minH: 8, minW: 2, static: false },
        { i: "h", x: 4, y: 8, w: 4, h: 16, minH: 8, minW: 2, static: false },
      ]
  );

  useEffect(() => {
    // Save layout to localStorage on layout update
    localStorage.setItem("layout", JSON.stringify(layout));
  }, [layout]);

  const onLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
  };

  // Function to toggle static state of an item
  const toggleStatic = (id: string) => {
    const updatedLayout = layout.map((item) =>
      item.i === id ? { ...item, static: !item.static } : item
    );
    setLayout(updatedLayout); // Trigger re-render by updating the state
  };

  return (
    <>
      <ResponsiveGridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={10}
        isDroppable={true}
        onLayoutChange={onLayoutChange}
        onDrop={(data) => console.log(data)}
        draggableHandle=".custom-drggable-handle"
        width={1700}
      >
        <div key="a">
          <GridItem id="a" toggleStatic={toggleStatic}>
            <StatCard title="Total Users" value="1,245" growth="4.5%" />
          </GridItem>
        </div>
        <div key="b">
          <GridItem id="b" toggleStatic={toggleStatic}>
            <StatCard title="Active Users" value="754" growth="-2.8%" />
          </GridItem>
        </div>
        <div key="c">
          <GridItem id="c" toggleStatic={toggleStatic}>
            <StatCard title="New Signups" value="120" growth="1.9%" />
          </GridItem>
        </div>
        <div key="d">
          <GridItem id="d" toggleStatic={toggleStatic}>
            <StatCard title="Total Revenue" value="$12,000" growth="3.4%" />
          </GridItem>
        </div>
        <div key="e">
          <GridItem id="e" toggleStatic={toggleStatic}>
            <RecentActivities />
          </GridItem>
        </div>
        <div key="f" className="bg-slate-500 p-4 rounded-lg shadow-md h-full">
          <GridItem id="f" toggleStatic={toggleStatic}>
            <UserOverviewCard />
          </GridItem>
        </div>
        <div key="g">
          <GridItem id="g" toggleStatic={toggleStatic}>
            <LineChart />
          </GridItem>
        </div>
        <div key="h">
          <GridItem id="h" toggleStatic={toggleStatic}>
            <BarChart />
          </GridItem>
        </div>
      </ResponsiveGridLayout>
    </>
  );
};

export default React.memo(MyFirstGrid);
