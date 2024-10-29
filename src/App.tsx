import { useEffect, useState } from "react";
import "./App.css";
import MyResponsiveGridLayout from "./components/MyResponsiveGridLayout";
import { useLayoutStore } from "./store/store";

const App = () => {
  const { layout: defaultLayout, saveLayout, clearLayout } = useLayoutStore();
  const [layout, setLayout] = useState(defaultLayout);
  useEffect(() => {
    setLayout(defaultLayout);
  }, [defaultLayout]);
  return (
    <div className="bg-gray-200 min-h-screen h-auto w-screen p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold "> Dashboard Builder</h2>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-slate-700 text-white rounded-lg"
            onClick={() => {
              saveLayout(layout);
              alert("Layout saved!");
            }}
          >
            Save Lyout
          </button>
          <button
            className="px-4 py-2 bg-slate-700 text-white rounded-lg"
            onClick={() => {
              clearLayout();
              alert("Layout Cleared!");
            }}
          >
            Clear Layout
          </button>
        </div>
      </div>
      <div className=" w-full ">
        <MyResponsiveGridLayout layout={layout} setLayout={setLayout} />
      </div>
    </div>
  );
};

export default App;
