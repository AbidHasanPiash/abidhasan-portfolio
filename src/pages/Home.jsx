import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-300 h-screen font-main overflow-y-auto">
        <Navbar/>
        <div className="w-screen lg:max-w-7xl lg:mx-auto">
            <div className="mx-3">
              <Outlet/>
            </div>
        </div>
    </div>
  )
}
