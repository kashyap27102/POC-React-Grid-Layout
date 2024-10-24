import "./App.css";
import MyResponsiveGridLayout from "./components/MyResponsiveGridLayout";

// import Sidebar from "./components/Sidebar";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen h-auto w-screen p-4 flex flex-col">
      <h2 className="text-2xl font-semibold mb-2">Custom Static Dashboard</h2>
      <div className=" w-full ">
        <MyResponsiveGridLayout />
      </div>
    </div>
  );
};

export default App;
