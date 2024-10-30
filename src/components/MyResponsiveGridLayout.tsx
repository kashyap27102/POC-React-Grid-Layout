import React, { useState } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import { v4 as uuidv4 } from "uuid";
import { GripHorizontal, PinIcon, X } from "lucide-react";
import { availableWidgets, defaultSetting, renderWidget } from "@/utils/helper";
import { LayoutItem } from "@/utils/types";

// Add default styles
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
// Add custom style
import "../custom-style.css";

type MyResponsiveGridLayoutProps = {
  layout: LayoutItem[]; // Prop for the layout array
  setLayout: React.Dispatch<React.SetStateAction<LayoutItem[]>>; // Prop for the function to update layout
};

// Enhance the Responsive component with width provider
const ResponsiveGridLayout = WidthProvider(Responsive);

// Main functional component for responsive grid layout
const MyResponsiveGridLayout: React.FC<MyResponsiveGridLayoutProps> = ({
  layout,
  setLayout,
}) => {
  // State for grid settings
  const [settings, SetSettings] = useState(defaultSetting);

  // Toggle the pinned state of a widget
  const togglePinned = (i: string) => {
    setLayout((prevLayout) =>
      prevLayout.map((item) =>
        item.i === i ? { ...item, static: !item.static } : item
      )
    );
  };

  // Update layout when items are rearranged
  const handleLayoutChange = (newLayout: Layout[]) => {
    setLayout((prevLayout) =>
      prevLayout.map((item) => {
        const newItem = newLayout.find((newItem) => newItem.i === item.i);
        return newItem ? { ...item, ...newItem } : item;
      })
    );
  };

  // Update layout when items are rearranged
  const handleDragStart = (e: React.DragEvent, widgetType: string) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  // Remove a widget from the layout
  const handleRemove = (i: string) => {
    setLayout((prevLayout) => prevLayout.filter((item) => item.i !== i));
  };

  // Handle dropping a new widget into the layout
  const onDrop = (_: Layout[], layoutItem: LayoutItem, event: DragEvent) => {
    console.log("Dropped:", layoutItem);

    const widgetType = event.dataTransfer?.getData("widgetType");
    if (widgetType) {
      const newItem: LayoutItem = {
        ...layoutItem,
        i: `${uuidv4()}`,
        widgetType,
      };
      setLayout((prevLayout) => [...prevLayout, newItem]);
    }
  };

  return (
    <div className="flex gap-2 border-4">
      {/* Available Widgest */}
      <div className="w-72 bg-gray-100 p-4 h-fit sticky">
        <h2 className="text-xl font-bold mb-4">Widgets</h2>
        <ul className="space-y-2">
          {availableWidgets.map((widget) => (
            <li
              key={widget.id}
              className="bg-white p-3 rounded shadow flex items-center space-x-3 cursor-move"
              draggable
              onDragStart={(e) => handleDragStart(e, widget.id)}
            >
              {widget.icon}
              <span className="ml-2">{widget.type}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full">
        {/* Settings */}
        <div className="flex gap-2 p-2 sticky">
          <div className="flex gap-2 items-center bg-slate-300 px-4 py-2 rounded-full">
            <input
              id="preventCollision"
              type="checkbox"
              checked={settings.preventCollision}
              onChange={() =>
                SetSettings({
                  ...settings,
                  preventCollision: !settings.preventCollision,
                })
              }
            />
            <label htmlFor="preventCollision">Prevent Collison</label>
          </div>
          <div className="flex gap-2 items-center bg-slate-300 px-4 py-2 rounded-full">
            <input
              id="allowOverlap"
              type="checkbox"
              checked={settings.allowOverlap}
              onChange={() =>
                SetSettings({
                  ...settings,
                  allowOverlap: !settings.allowOverlap,
                })
              }
            />
            <label htmlFor="allowOverlap">Allow Overlap</label>
          </div>
        </div>
        {/* Dashboard */}
        <div className="flex-1 relative overflow-y-auto h-[800px]">
          <ResponsiveGridLayout
            className="layout border-2 bg-white"
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={100}
            onLayoutChange={handleLayoutChange}
            draggableHandle=".drag-handle"
            style={{ minHeight: "100%", overflow: "auto" }}
            isDroppable
            onDrop={onDrop}
            droppingItem={{ i: "DROP", w: 3, h: 2 }}
            preventCollision={settings.preventCollision}
            allowOverlap={settings.allowOverlap}
            useCSSTransforms
          >
            {layout.map((item) => (
              <div
                key={item.i}
                className=" overflow-hidden rounded-md border-2 border-gray-300"
              >
                <div className="bg-gray-200 p-2 flex justify-between items-center ">
                  <span className="flex items-center gap-2 font-semibold drag-handle cursor-move">
                    <GripHorizontal className="w-4 h-4" />
                    {item.widgetType.toUpperCase()}
                  </span>
                  <div className="space-x-3">
                    <button
                      onClick={() => togglePinned(item.i)}
                      className={`p-1 rounded-full ${
                        item.static
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300 text-gray-600"
                      } hover:bg-opacity-80 transition-colors`}
                      aria-label={item.static ? "Unpin" : "Pin"}
                    >
                      <PinIcon className="w-4 h-4" />
                    </button>
                    <button
                      className="p-1 rounded-full bg-gray-300 hover:bg-red-400 hover:bg-opacity-80 transition-colors"
                      onClick={() => handleRemove(item.i)}
                    >
                      <X className="w-4 h-4 " />
                    </button>
                  </div>
                </div>
                {renderWidget(item)}
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </div>
    </div>
  );
};

export default MyResponsiveGridLayout;
