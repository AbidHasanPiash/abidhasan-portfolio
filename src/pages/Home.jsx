import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className="text-7xl">
            <Outlet/>
        </div>
    </div>
  )
}
