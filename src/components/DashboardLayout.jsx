import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar.jsx";
export default function DashboardLayout() {
    return (
      <div className="flex relative w-full flex-row">
            <div className="relative w-[10vw] bg-G100  h-[100vh]">
                <div className="w-full">
                    <Sidebar />
                </div>
            </div>
            <main className="flex-1 w-[90vw] relative p-4">
                <Outlet/>
            </main>
      </div>
  );
}
