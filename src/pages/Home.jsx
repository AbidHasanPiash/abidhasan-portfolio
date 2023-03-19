import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-300 h-screen font-main overflow-hidden">
        <Navbar/>
        <div className="text-7xl text-center">
            <Outlet/>
        </div>
    </div>
  )
}
